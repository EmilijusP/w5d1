import { Component, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSession, FormState, Session } from './models/session.model';
import { SessionForm } from './components/session-form/session-form';
import { SessionsView } from "./components/sessions-view/sessions-view";
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SessionForm, SessionsView], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  private sessionService = inject(SessionService);

  sessions = this.sessionService.getSessions();
  state = this.sessionService.getState();

  onSessionCreate(data: CreateSession) {
      this.sessionService.addSession(data);
}
}

export { AppComponent as App };