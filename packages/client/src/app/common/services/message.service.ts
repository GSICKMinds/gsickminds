import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';
import { IAlert } from '@models/models';

@Injectable()
export class MessageService {

  private subject = new Subject<IAlert>();

  sendMessage(message: IAlert) {
    this.subject.next(message);
  }
  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
  clearMessage() {
    this.subject.next();
  }
}

