
export interface Attendee {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email?: string;
}

export interface CreateAttendee {
    firstName: string;
    lastName: string;
    username: string;
    email?: string;
}

export type FormState = 'idle' | 'submitting' | 'success' | 'error';