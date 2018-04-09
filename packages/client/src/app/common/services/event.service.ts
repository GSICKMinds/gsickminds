import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { environment } from '@environments/environment';
import { TalksService } from '@services/talks.service';
import { SpeakersService } from '@services/speakers.service';


@Injectable()
export class EventService {

  private collectionUrl = '/events';

  constructor(private http: HttpClient, private talkService: TalksService, private speakerService: SpeakersService) { }

  getEvents() {
    return this.http.get(`${environment.apiUrl}${this.collectionUrl}`).toPromise();
  }

  create(event) {
    return this.http.post(`${environment.apiUrl}${this.collectionUrl}`, event).toPromise();
  }

  getEventById(eventId) {
    return this.http.get(`${environment.apiUrl}${this.collectionUrl}/${eventId}`).toPromise();
  }

  async getEvent(eventId: string) {
    let talks = await this.talkService.getAll(eventId)
    let talksSpeakers = await Promise.all(talks.map(async talk => {
      let speakers = await this.speakerService.getAll(eventId, talk._id);
      return { ...talk, speakers }
    }));

    return talksSpeakers;
  }

  async getLast() {
    let event = await this.http.get(`${environment.apiUrl}${this.collectionUrl}/last`).toPromise()
    let talks = await this.talkService.getAll(event['_id'])
    let talksSpeakers = await Promise.all(talks.map(async talk => {
      let speakers = await this.speakerService.getAll(event['_id'], talk._id);
      return { ...talk, speakers }
    }));

    return { date: event['date'], talks: talksSpeakers };

  }
}
