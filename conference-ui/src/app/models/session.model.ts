
export interface Session {
  id: number;
  title: string;
  abstract?: string;
  startTime?: string;
  endTime?: string;
  trackId?: number;
}

export interface CreateSession {
  title: string;
  abstract?: string;
  startTime?: string;
  endTime?: string;
  trackId?: number;
}

export type FormState = 'idle' | 'submitting' | 'success' | 'error';