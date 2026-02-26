import { Component, EventEmitter, Output, output } from '@angular/core';
import { CreateAttendee } from '../../models/attendee.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attendee.form',
  imports: [FormsModule],
  templateUrl: './attendee.form.html',
  styleUrl: './attendee.form.css',
})
export class AttendeeForm {
  @Output() formSubmit = new EventEmitter<CreateAttendee>();

  attendee: CreateAttendee = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
  };

  onSubmit() {
    this.formSubmit.emit(this.attendee);
  }
}
  