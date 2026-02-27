import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { CreateSession } from '../../models/session.model';

@Component({
  selector: 'app-session-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './session-form.html',
  styleUrl: './session-form.css',
})
export class SessionForm {
  private fb = inject(FormBuilder);
  private sessionService = inject(SessionService);
  private router = inject(Router);

  sessionForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    abstract: ['', [Validators.maxLength(500)]],
    startTime: [''],
    endTime: [''],
    trackId: [undefined]
  });

  onSubmit() {
    if (this.sessionForm.valid) {
      const sessionData: CreateSession = { ...this.sessionForm.value };

      if (!sessionData.startTime) {
        delete sessionData.startTime;
      }
      if (!sessionData.endTime) {
        delete sessionData.endTime;
      }

      this.sessionService.addSession(sessionData);
      
      this.sessionForm.reset();
      
      this.router.navigate(['/sessions']);
    }
  }
}