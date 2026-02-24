import { Component, Input } from '@angular/core';
import { Session } from '../../models/session.model';
import { CommonModule } from '@angular/common';
import { Highlight } from '../../directives/highlight';

@Component({
  selector: 'app-sessions-view',
  imports: [CommonModule, Highlight],
  templateUrl: './sessions-view.html',
  styleUrl: './sessions-view.css',
})
export class SessionsView {
  @Input() sessions: Session[] = [];
}
