import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '@environments/environment';

@Injectable()
export class TalksService {

  private collectionUrl = '/events';

  constructor(private http: HttpClient) { }

  getAll(eventId: string) {
    return this.http.get(`${environment.apiUrl}${this.collectionUrl}/${eventId}/talks`).toPromise();
  }

  update(eventId, talkId, talk) {
    return this.http.put(`${environment.apiUrl}${this.collectionUrl}/${eventId}/talks/${talkId}`, talk).toPromise();
  }

  create(eventId, talk) {
    return this.http.post(`${environment.apiUrl}${this.collectionUrl}/${eventId}/talks`, talk).toPromise();
  }

}
