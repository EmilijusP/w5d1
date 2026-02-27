import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { SessionService } from './services/session.service';
import { AttendeeService } from './services/attendee.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink], // Paliekame TIK router modulius
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {

  private sessionService = inject(SessionService);
  private attendeeService = inject(AttendeeService);

  ngOnInit() {
    // Pradinį duomenų užkrovimą galime palikti čia, 
    // kad jie būtų pasiekiami visoje aplikacijoje vos ją įjungus
    this.sessionService.loadSessions();
    this.attendeeService.loadAttendees();
  }
}

export { AppComponent as App };