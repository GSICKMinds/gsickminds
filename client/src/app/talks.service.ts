import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TalksService {

  private talksUrl = 'http://localhost:3000/events';

  constructor(private http: HttpClient) { }

  getAll(eventId: string) {
    return this.http.get(`${this.talksUrl}/${eventId}/talks`).toPromise();
  }

  update(eventId, talkId, talk) {
    return this.http.put(`${this.talksUrl}/${eventId}/talks/${talkId}`, talk).toPromise();
  }

  create(eventId, talk) {
    return this.http.post(`${this.talksUrl}/${eventId}/talks`, talk).toPromise();
  }

}
