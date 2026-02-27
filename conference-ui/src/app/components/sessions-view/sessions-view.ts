import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // Reikės navigacijai
import { SessionService } from '../../services/session.service';
import { Highlight } from '../../directives/highlight';
import { SessionTimePipe } from '../../pipes/session-time-pipe';

@Component({
  selector: 'app-sessions-view',
  standalone: true,
  imports: [CommonModule, Highlight, SessionTimePipe, RouterLink],
  templateUrl: './sessions-view.html',
  styleUrl: './sessions-view.css',
})
export class SessionsView {
  private sessionService = inject(SessionService);
  
  // Pasiimame signalą tiesiai iš serviso
  sessions = this.sessionService.sessions; 
}