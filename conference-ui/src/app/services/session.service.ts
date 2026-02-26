import { inject, Injectable, signal } from '@angular/core';
import { CreateSession, FormState, Session } from '../models/session.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private httpClient = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/sessions`;

  private _sessions = signal<Session[]>([]);
  private _state = signal<FormState>('idle');

  sessions = this._sessions.asReadonly();
  state = this._state.asReadonly();

  loadSessions() {
    this.httpClient.get<Session[]>(this.apiUrl).subscribe({
      next: (sessions) => this._sessions.set(sessions),
      error: (error) => {
        console.error('Error fetching sessions:', error);
        this._state.set('error');
      }
    });
  }

  addSession(data: CreateSession) {
      this._state.set('submitting');

      this.httpClient.post<Session>(this.apiUrl, data).pipe(
        tap((newSession) => {
          this._sessions.update(sessions => [...sessions, newSession]);
          this._state.set('success');
          setTimeout(() => this._state.set('idle'), 3000);
        }),
        catchError((err) => {
          console.error('Klaida išsaugant:', err);
          this._state.set('error');
          return [];
        })
      ).subscribe();
    }

  getSessions() {
    return this.sessions;
  }

  getState() {
    return this.state;
  }
}
