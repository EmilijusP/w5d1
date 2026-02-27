import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CreateAttendee } from '../../models/attendee.model';
import { FormBuilder, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-attendee-form',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './attendee-form.html',
  styleUrl: './attendee-form.css',
  standalone: true,
})
export class AttendeeForm {
  @Output() attendeeRegistered = new EventEmitter<CreateAttendee>();

  private fb = inject(FormBuilder);

  attendeeForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.email]],
  });

  onSubmit() {
    if (this.attendeeForm.valid) {
      this.attendeeRegistered.emit(this.attendeeForm.value as CreateAttendee);
    }
  }
}
  