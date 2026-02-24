import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSession, FormState } from './models/session.model';
import { SessionForm } from './components/session-form/session-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SessionForm], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  state: FormState = 'idle';

  onSessionCreate(data: CreateSession) {
      this.state = 'submitting';
      console.log('Session created:', data);
      this.state = 'success';
  }
}

export { AppComponent as App };