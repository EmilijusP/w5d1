import { Pipe, PipeTransform } from '@angular/core';
import { Session } from '../models/session.model';

@Pipe({
  name: 'sessionTime',
  standalone: true,
})
export class SessionTimePipe implements PipeTransform {

  transform(session: Session): string | null {
    if (!session.startTime && !session.endTime) {
      return 'TBD';
    }
    
    return `${session.startTime ? new Date(session.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'TBD'} - ${session.endTime ? new Date(session.endTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'TBD'}`;
  }

}
