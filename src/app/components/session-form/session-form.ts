import { Component, EventEmitter, Output } from '@angular/core';
import { CreateSession } from '../../models/session.model'; 
import { FormsModule, NgForm } from '@angular/forms';
import { form } from '@angular/forms/signals';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-session-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './session-form.html',
  styleUrl: './session-form.css',
})
export class SessionForm {
  @Output() sessionCreated = new EventEmitter<CreateSession>();

  newSession: CreateSession = {
    title: '',
    abstract: '',
    startTime: '',
    endTime: '',
    trackId: undefined
  };

  onSubmit(form: NgForm) {
    this.sessionCreated.emit(this.newSession);
    form.resetForm();
  }
}
