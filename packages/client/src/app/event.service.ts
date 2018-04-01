import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EventService {

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get('http://localhost:3000/events').toPromise();
  }

  create(event) {
    return this.http.post('http://localhost:3000/events', event).toPromise();
  }

}
