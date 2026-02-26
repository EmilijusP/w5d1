import { Pipe, PipeTransform } from '@angular/core';
import { Session } from '../models/session.model';

@Pipe({
  name: 'sessionTime',
})
export class SessionTimePipe implements PipeTransform {

  transform(session: Session): string | null {
    if (!session.startTime && !session.endTime) {
      return 'Time TBD';
    }
    return `${session.startTime || '???'} - ${session.endTime || '???'}`;
  }

}
