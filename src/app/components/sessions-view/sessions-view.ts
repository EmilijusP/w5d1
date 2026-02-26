import { Component, Input } from '@angular/core';
import { Session } from '../../models/session.model';
import { CommonModule } from '@angular/common';
import { Highlight } from '../../directives/highlight';
import { SessionTimePipe } from '../../pipes/session-time-pipe';

@Component({
  selector: 'app-sessions-view',
  imports: [CommonModule, Highlight, SessionTimePipe],
  templateUrl: './sessions-view.html',
  styleUrl: './sessions-view.css',
})
export class SessionsView {
  @Input() sessions: Session[] = [];
}
