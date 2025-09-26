export interface ChatMessage {
  id: number;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

export interface N8nWebhookPayload {
  chatInput: string;
  sessionId: string;
  timestamp: string;
}

export interface N8nWebhookResponse {
  output?: string;
  response?: string;
  message?: string;
  text?: string;
  [key: string]: any;
}