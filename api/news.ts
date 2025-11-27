import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai';
import type { NewsData } from '../types';

const API_KEY = process.env.GEMINI_API_KEY;
const CACHE_TTL_MS = 1000 * 60 * 15; // 15 minutes

let cachedNews: { data: NewsData; expiresAt: number } | null = null;

const getModel = () => {
  if (!API_KEY) {
    throw new Error('Missing GEMINI_API_KEY environment variable.');
  }

  const genAI = new GoogleGenerativeAI(API_KEY);
  return genAI.getGenerativeModel({
    model: 'gemini-2.5-flash-lite-preview-09-2025',
    generationConfig: {
      responseMimeType: 'application/json',
      responseSchema: {
        type: SchemaType.OBJECT,
        properties: {
          news: {
            type: SchemaType.ARRAY,
            items: {
              type: SchemaType.OBJECT,
              properties: {
                id: { type: SchemaType.INTEGER },
                title: { type: SchemaType.STRING },
                date: { type: SchemaType.STRING },
                summary: { type: SchemaType.STRING },
              },
              required: ['id', 'title', 'date', 'summary'],
            },
          },
          instagram: {
            type: SchemaType.ARRAY,
            items: {
              type: SchemaType.OBJECT,
              properties: {
                id: { type: SchemaType.INTEGER },
                username: { type: SchemaType.STRING },
                caption: { type: SchemaType.STRING },
                likes: { type: SchemaType.INTEGER },
              },
              required: ['id', 'username', 'caption', 'likes'],
            },
          },
        },
        required: ['news', 'instagram'],
      },
    },
  });
};

const buildPrompt = () => {
  const today = new Date().toLocaleDateString('es-DO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return `Genera contenido dinámico para el sitio web de la Sociedad Dominicana de Vacunología (SDV).
Fecha actual: ${today}.

Fuentes recomendadas (usa información real o simulada basada en el estilo de estas fuentes):
- listindiario.com.do
- diariosalud.do
- portadamedica.com
- notamedica.do
- presidencia.gob.do
- hoy.com.do
- paho.org

Necesito dos cosas en formato JSON:

1. "news": 3 noticias o eventos recientes y relevantes para RD.
   - Deben parecer titulares reales de las fuentes citadas.
   - Temas: Jornadas de vacunación, boletines epidemiológicos, nuevos virus, consejos de la SDV.
   - Fechas cercanas a ${today}.

2. "instagram": 3 posts de Instagram simulados.
   - Usuarios: @sdvacunas (Oficial) o @drbreacastillo (Presidente).
   - Captions con emojis y hashtags populares en RD (#VacunateRD, #Salud, #SDV).
   - Likes realistas (entre 50 y 500).

Output JSON exacto.`;
};

const formatResponse = (raw: NewsData): NewsData => {
  const newsImages = ['/images/news-1.png', '/images/news-2.png', '/images/news-3.png'];
  const instaImages = ['/images/insta-1.png', '/images/insta-2.png'];

  const news = (raw.news || []).map((item, index) => ({
    ...item,
    imageUrl: newsImages[index % newsImages.length],
    url: `https://www.google.com/search?q=${encodeURIComponent(
      `${item.title} Sociedad Dominicana de Vacunología`,
    )}`,
  }));

  const instagram = (raw.instagram || []).map((item, index) => ({
    ...item,
    imageUrl: instaImages[index % instaImages.length],
    postUrl: 'https://www.instagram.com/explore/tags/vacunaterd/',
  }));

  return { news, instagram };
};

const shouldUseCache = () => cachedNews && cachedNews.expiresAt > Date.now();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    if (shouldUseCache()) {
      return res.status(200).json({ data: cachedNews!.data, cached: true });
    }

    const model = getModel();
    const result = await model.generateContent(buildPrompt());
    const response = await result.response;
    const text = response.text();
    const parsed = JSON.parse(text || '{}');

    const formatted = formatResponse(parsed);
    cachedNews = { data: formatted, expiresAt: Date.now() + CACHE_TTL_MS };

    return res.status(200).json({ data: formatted, cached: false });
  } catch (error) {
    console.error('Error in /api/news:', error);
    const message =
      error instanceof Error ? error.message : 'Error desconocido al generar noticias.';
    return res.status(500).json({
      error:
        process.env.NODE_ENV === 'production'
          ? 'Hubo un problema al generar las noticias. Intenta más tarde.'
          : message,
    });
  }
}
