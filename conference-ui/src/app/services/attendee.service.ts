import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Attendee, FormState } from '../models/attendee.model';
import { tap } from 'rxjs/internal/operators/tap';

@Injectable({
  providedIn: 'root',
})
export class AttendeeService {
  private httpClient = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/attendees`;

  private _attendees = signal<Attendee[]>([]);
  private _state = signal<FormState>('idle');

  attendees = this._attendees.asReadonly();
  state = this._state.asReadonly();

  loadAttendees() {
    this.httpClient.get<Attendee[]>(this.apiUrl).subscribe({
      next: (attendees) => this._attendees.set(attendees),
      error: (error) => {
        console.error('Error fetching attendees:', error);
        this._state.set('error');
      }
    });
  }

  addAttendee(data: Omit<Attendee, 'id'>) {
    this._state.set('submitting');
    this.httpClient.post<Attendee>(this.apiUrl, data).pipe(
      tap((newAttendee) => {
        this._attendees.update(attendees => [...attendees, newAttendee]);
        this._state.set('success');
        setTimeout(() => this._state.set('idle'), 3000);
      }
    )).subscribe({
      error: (err) => {
        console.error('Error saving attendee:', err);
        this._state.set('error');
      }
    });
  }

  getAttendees() {
    return this.attendees;
  }

  getState() {
    return this.state;
  }
}
