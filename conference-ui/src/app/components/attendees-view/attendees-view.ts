import { Component, Input, input } from '@angular/core';
import { Attendee } from '../../models/attendee.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-attendees-view',
  imports: [CommonModule],
  templateUrl: './attendees-view.html',
  styleUrl: './attendees-view.css',
})
export class AttendeesView {
  @Input() attendees: Attendee[] = [];
}
