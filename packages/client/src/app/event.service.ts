import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { environment } from '../environments/environment';

@Injectable()
export class EventService {

  private collectionUrl = '/events';

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get(`${environment.apiUrl}${this.collectionUrl}`).toPromise();
  }

  create(event) {
    return this.http.post(`${environment.apiUrl}${this.collectionUrl}`, event).toPromise();
  }

  async getLast() {
    let event = await this.http.get(`${environment.apiUrl}${this.collectionUrl}/last`).toPromise()
    let talks = await this.http.get<any[]>(`${environment.apiUrl}${this.collectionUrl}/${event['_id']}/talks`).toPromise();
    let talksSpeakers = await Promise.all(talks.map(async talk => {
      let speakers = await this.http.get(`${environment.apiUrl}${this.collectionUrl}/${event['_id']}/talks/${talk['_id']}/speakers`).toPromise();
      return { ...talk, speakers }
    }));

    return { date: event['date'], talks: talksSpeakers };

  }
}
