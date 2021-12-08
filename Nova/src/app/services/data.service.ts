import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class DataService {
  private sent = new BehaviorSubject('false')
  private messageSource = new BehaviorSubject('nothing');
  currentMessage = this.messageSource.asObservable();
  sentStatus = this.sent.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  changeSent(sent: string) {
    this.sent.next(sent);
  }

}
