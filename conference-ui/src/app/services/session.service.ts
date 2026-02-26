import { Injectable, Signal, signal } from '@angular/core';
import { CreateSession, FormState, Session } from '../models/session.model';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private _sessions = signal<Session[]>([]);
  private _state = signal<FormState>('idle');

  sessions = this._sessions.asReadonly();
  state = this._state.asReadonly();

  addSession(data: CreateSession) {
    this._state.set('submitting');

    const newSession: Session = {
      ...data,
      id: this._sessions().length + 1
    };

    this._sessions.update(sessions => [...sessions, newSession]);
    this._state.set('success');

    setTimeout(() => {
      this._state.set('idle');
    }, 3000);
  }

  getSessions() {
    return this.sessions;
  }

  getState() {
    return this.state;
  }
}
