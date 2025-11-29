export const getGeminiApiKey = (): string | undefined => {
  return process.env.GEMINI_API_KEY || process.env.VITE_API_KEY;
};
