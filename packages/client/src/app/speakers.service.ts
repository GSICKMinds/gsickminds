import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SpeakersService {
  private talksUrl = 'http://localhost:3000/events';

  constructor(private http: HttpClient) { }

  getAll(eventId, talkId) {
    return this.http.get(`${this.talksUrl}/${eventId}/talks/${talkId}/speakers`).toPromise();
  }

  update(eventId, talkId, speakerId, speaker) {
    return this.http.put(`${this.talksUrl}/${eventId}/talks/${talkId}/speakers/${speakerId}`, speaker).toPromise();
  }

  create(eventId, talkId, speaker) {
    return this.http.post(`${this.talksUrl}/${eventId}/talks/${talkId}/speakers`, speaker).toPromise();
  }
}
