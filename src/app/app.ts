import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { CreateSession, FormState } from './models/session.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  constructor(private cdr: ChangeDetectorRef) {}

  newSession: CreateSession = {
    title: '',
    abstract: '',
    startTime: '',
    endTime: '',
    trackId: undefined
  };

  state: FormState = 'idle';

  onSubmit(form: NgForm) {
    this.state = 'loading';
    
    setTimeout(() => {
      console.log('Duomenys sėkmingai "išsiųsti":', this.newSession);
      
      this.state = 'success';
      this.newSession = {
        title: '',
        abstract: '',
        startTime: '',
        endTime: '',
        trackId: undefined
      };
      
      this.cdr.detectChanges();

      setTimeout(() => {
        this.state = 'idle';
        this.cdr.detectChanges();
      }, 3000);

    }, 2000);
  }
}

export { AppComponent as App };