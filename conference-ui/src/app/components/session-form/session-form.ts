import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CreateSession } from '../../models/session.model'; 
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-session-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './session-form.html',
  styleUrl: './session-form.css',
})
export class SessionForm {
  @Output() sessionCreated = new EventEmitter<CreateSession>();

  private fb = inject(FormBuilder);

  sessionForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    abstract: ['', [Validators.maxLength(500)]],
    startTime: [''],
    endTime: [''],
    trackId: [undefined]
  });

  onSubmit() {
    if (this.sessionForm.valid) {
      this.sessionCreated.emit(this.sessionForm.value);
      this.sessionForm.reset();
    }
  }
}
