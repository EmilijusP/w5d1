import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSession, FormState, Session } from './models/session.model';
import { SessionForm } from './components/session-form/session-form';
import { SessionsView } from "./components/sessions-view/sessions-view";
import { SessionService } from './services/session.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SessionForm, SessionsView], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  private sessionService = inject(SessionService);

  sessions = this.sessionService.sessions;

  state: FormState = 'idle';

  onSessionCreate(data: CreateSession) {
      this.state = 'submitting';
      this.sessionService.addSession(data);
      console.log('Session created:', data);
      this.state = 'success';
      setTimeout(() => {
        this.state = 'idle';
      }, 1);
  }
}

export { AppComponent as App };