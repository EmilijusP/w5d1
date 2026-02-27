import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { Session } from '../../models/session.model';
import { SessionTimePipe } from '../../pipes/session-time-pipe';

@Component({
  selector: 'app-session-details',
  standalone: true,
  imports: [CommonModule, SessionTimePipe],
  templateUrl: './session-details.html',
  styleUrl: './session-details.css',
})
export class SessionDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private sessionService = inject(SessionService);

  session = signal<Session | null>(null);
  loading = signal(true);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    if (id) {
      this.sessionService.getSessionById(id).subscribe({
        next: (data) => {
          this.session.set(data);
          this.loading.set(false);
        },
        error: () => {
          this.loading.set(false);
          this.router.navigate(['/sessions']); 
        }
      });
    }
  }

  goBack() {
    this.router.navigate(['/sessions']);
  }
}