import { GoogleGenerativeAI } from '@google/generative-ai';
import type { ApiRequest, ApiResponse } from './types';
import { getGeminiApiKey } from './config';

const getModel = () => {
  const apiKey = getGeminiApiKey();
  if (!apiKey) {
    throw new Error('Missing GEMINI_API_KEY (or legacy VITE_API_KEY) environment variable.');
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  return genAI.getGenerativeModel({
    model: 'gemini-2.5-flash-lite-preview-09-2025',
    systemInstruction: `Eres el asistente virtual de la Sociedad Dominicana de Vacunología (SDV). 
Tu objetivo es responder preguntas sobre vacunas, calendarios de vacunación en República Dominicana y salud preventiva.

Reglas:
1. Responde de manera concisa, amable y profesional.
2. Basa tus respuestas en las pautas de la OMS y el Ministerio de Salud Pública de República Dominicana.
3. Siempre incluye un descargo de responsabilidad indicando que eres una IA y que el usuario debe consultar a un médico.
4. Si te preguntan por diagnósticos médicos específicos, declina amablemente y sugiere visitar a un especialista.
5. El idioma debe ser Español.`,
  });
};

const parseBody = (body: unknown) => {
  if (!body) return {};
  if (typeof body === 'string') {
    try {
      return JSON.parse(body);
    } catch {
      return {};
    }
  }
  return body as Record<string, unknown>;
};

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const { query } = parseBody(req.body);

    if (!query || typeof query !== 'string') {
      return res.status(400).json({ error: 'La pregunta es requerida.' });
    }

    const model = getModel();
    const result = await model.generateContent(query);
    const response = await result.response;
    const reply =
      response.text() ||
      'No pude generar una respuesta en este momento. Por favor intenta nuevamente.';

    return res.status(200).json({ reply });
  } catch (error) {
    console.error('Error in /api/chat:', error);
    const message =
      error instanceof Error ? error.message : 'Error desconocido al generar la respuesta.';
    return res.status(500).json({
      error:
        process.env.NODE_ENV === 'production'
          ? 'Hubo un problema al generar la respuesta. Intenta más tarde.'
          : message,
    });
  }
}
