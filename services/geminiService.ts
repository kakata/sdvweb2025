import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
import { NewsData } from "../types";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);

export const getVaccineAdvice = async (query: string): Promise<string> => {
  if (!import.meta.env.VITE_API_KEY) {
    return "Lo siento, el servicio de asistente virtual no está configurado correctamente (Falta API Key).";
  }

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash-lite-preview-09-2025",
      systemInstruction: `Eres el asistente virtual de la Sociedad Dominicana de Vacunología (SDV). 
Tu objetivo es responder preguntas sobre vacunas, calendarios de vacunación en República Dominicana y salud preventiva.

Reglas:
1. Responde de manera concisa, amable y profesional.
2. Basa tus respuestas en las pautas de la OMS y el Ministerio de Salud Pública de República Dominicana.
3. Siempre incluye un descargo de responsabilidad indicando que eres una IA y que el usuario debe consultar a un médico.
4. Si te preguntan por diagnósticos médicos específicos, declina amablemente y sugiere visitar a un especialista.
5. El idioma debe ser Español.`
    });

    const result = await model.generateContent(query);
    const response = await result.response;
    return response.text() || "No pude generar una respuesta en este momento.";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Hubo un error al conectar con el asistente. Por favor intenta más tarde.";
  }
};

export const generateDynamicNews = async (): Promise<NewsData | null> => {
  if (!import.meta.env.VITE_API_KEY) return null;

  try {
    const today = new Date().toLocaleDateString('es-DO', { year: 'numeric', month: 'long', day: 'numeric' });

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash-lite-preview-09-2025",
      generationConfig: {
        responseMimeType: "application/json",
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
                required: ["id", "title", "date", "summary"]
              }
            },
            instagram: {
              type: SchemaType.ARRAY,
              items: {
                type: SchemaType.OBJECT,
                properties: {
                  id: { type: SchemaType.INTEGER },
                  username: { type: SchemaType.STRING },
                  caption: { type: SchemaType.STRING },
                  likes: { type: SchemaType.INTEGER }
                },
                required: ["id", "username", "caption", "likes"]
              }
            }
          }
        }
      }
    });

    const prompt = `Genera contenido dinámico para el sitio web de la Sociedad Dominicana de Vacunología (SDV).
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

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    const parsedData = JSON.parse(text || "{}");
    const newsData = parsedData.news || [];
    const instaData = parsedData.instagram || [];

    // Process News with images
    const processedNews = newsData.map((item: any, index: number) => ({
      ...item,
      imageUrl: ['/images/news-1.png', '/images/news-2.png', '/images/news-3.png'][index % 3],
      url: `https://www.google.com/search?q=${encodeURIComponent(item.title + " Sociedad Dominicana de Vacunología")}`
    }));

    // Process Instagram with images
    const processedInsta = instaData.map((item: any, index: number) => ({
      ...item,
      imageUrl: ['/images/insta-1.png', '/images/insta-2.png'][index % 2],
      postUrl: `https://www.instagram.com/explore/tags/vacunaterd/` // Fallback link
    }));

    return {
      news: processedNews,
      instagram: processedInsta
    };

  } catch (error) {
    console.error("Error generating dynamic content:", error);
    return null;
  }
};
