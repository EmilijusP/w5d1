import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSession, FormState, Session } from './models/session.model';
import { SessionForm } from './components/session-form/session-form';
import { SessionsView } from "./components/sessions-view/sessions-view";
import { SessionService } from './services/session.service';
import { AttendeeForm } from "./components/attendee-form/attendee-form";
import { AttendeesView } from "./components/attendees-view/attendees-view";
import { Attendee } from './models/attendee.model';
import { AttendeeService } from './services/attendee.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SessionForm, SessionsView, AttendeeForm, AttendeesView], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  private sessionService = inject(SessionService);
  private attendeeService = inject(AttendeeService);

  sessions = this.sessionService.getSessions();
  sessionState = this.sessionService.getState();
  attendees = this.attendeeService.getAttendees();
  attendeeState = this.attendeeService.getState();

  ngOnInit() {
    this.sessionService.loadSessions();
    this.attendeeService.loadAttendees();
  }

  onSessionCreate(data: CreateSession) {
    this.sessionService.addSession(data);
  }

  onAttendeeRegister(data: Omit<Attendee, 'id'>) {
    this.attendeeService.addAttendee(data);
  }
}

export { AppComponent as App };