import { Injectable } from '@angular/core';
import { Session } from '../models/session.model';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  sessions: Session[] = [];

  addSession(data: Omit<Session, 'id'>) {
    this.sessions.push({
        ...data,
        id: this.sessions.length + 1
      });
  }
}


