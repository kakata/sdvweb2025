import type { IncomingMessage, ServerResponse } from 'http';

export type ApiRequest = IncomingMessage & {
  body?: unknown;
  method?: string;
};

export type ApiResponse = ServerResponse & {
  status: (statusCode: number) => ApiResponse;
  json: (body: unknown) => ApiResponse;
};
