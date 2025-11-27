import type { NewsData } from '../types';

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');

const withBase = (path: string) => `${API_BASE_URL}${path}`;

const safeFetch = async <T>(input: RequestInfo | URL, init?: RequestInit): Promise<T | null> => {
  try {
    const response = await fetch(input, init);
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    return (await response.json()) as T;
  } catch (error) {
    console.error('Error fetching from API:', error);
    return null;
  }
};

type ChatResponse = { reply: string };
type NewsResponse = { data: NewsData };

export const getVaccineAdvice = async (query: string): Promise<string> => {
  const payload = { query };
  const response = await safeFetch<ChatResponse>(withBase('/api/chat'), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (response?.reply) {
    return response.reply;
  }

  return 'El asistente virtual no está disponible ahora mismo. Por favor intenta nuevamente más tarde.';
};

export const generateDynamicNews = async (): Promise<NewsData | null> => {
  const response = await safeFetch<NewsResponse>(withBase('/api/news'));
  return response?.data ?? null;
};
