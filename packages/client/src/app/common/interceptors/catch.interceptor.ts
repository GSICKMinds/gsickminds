import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { MessageService } from '@services/message.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable()
export class CatchInterceptor implements HttpInterceptor {

  constructor(private messageService: MessageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(req)
      .catch((err) => {
        this.messageService.sendMessage({ type: 'danger', message: `${JSON.stringify(err.error)}` })
        return Observable.throw(JSON.stringify(err.error));
      })
  }

}



