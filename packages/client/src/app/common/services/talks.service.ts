import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class TalksService {

  private collectionUrl = '/events';

  constructor(@Inject('apiUrl') private apiUrl: string, private http: HttpClient) { }

  getAll(eventId: string) {
    return this.http.get<any[]>(`${this.apiUrl}${this.collectionUrl}/${eventId}/talks`).toPromise();
  }

  update(eventId, talkId, talk) {
    return this.http.put(`${this.apiUrl}${this.collectionUrl}/${eventId}/talks/${talkId}`, talk).toPromise();
  }

  create(eventId, talk) {
    return this.http.post(`${this.apiUrl}${this.collectionUrl}/${eventId}/talks`, talk).toPromise();
  }

}
