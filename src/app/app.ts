import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSession, FormState, Session } from './models/session.model';
import { SessionForm } from './components/session-form/session-form';
import { SessionsView } from "./components/sessions-view/sessions-view";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SessionForm, SessionsView], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  sessions: Session[] = [];

  state: FormState = 'idle';

  onSessionCreate(data: CreateSession) {
      this.state = 'submitting';
      this.sessions.push({
        ...data,
        id: this.sessions.length + 1
      });
      console.log('Session created:', data);
      this.state = 'success';
      setTimeout(() => {
        this.state = 'idle';
      }, 1);
  }
}

export { AppComponent as App };