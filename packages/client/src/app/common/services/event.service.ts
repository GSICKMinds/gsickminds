import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { SpeakersService } from '@services/speakers.service';
import { TalksService } from '@services/talks.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class EventService {

  private collectionUrl = '/events';

  constructor(@Inject('apiUrl') private apiUrl: string, private http: HttpClient, private talkService: TalksService, private speakerService: SpeakersService) { }

  getEvents() {
    return this.http.get(`${this.apiUrl}${this.collectionUrl}`).toPromise();
  }

  create(event) {
    return this.http.post(`${this.apiUrl}${this.collectionUrl}`, event).toPromise();
  }

  getEventById(eventId) {
    return this.http.get(`${this.apiUrl}${this.collectionUrl}/${eventId}`).toPromise();
  }

  async getEvent(eventId: string) {
    const talks = await this.talkService.getAll(eventId);
    const talksSpeakers = await Promise.all(talks.map(async talk => {
      const speakers = await this.speakerService.getAll(eventId, talk._id);
      return { ...talk, speakers };
    }));

    return talksSpeakers;
  }

  async getLast() {
    const event = await this.http.get(`${this.apiUrl}${this.collectionUrl}/last`).toPromise();
    const talks = await this.talkService.getAll(event['_id']);
    const talksSpeakers = await Promise.all(talks.map(async talk => {
      const speakers = await this.speakerService.getAll(event['_id'], talk._id);
      return { ...talk, speakers };
    }));

    return { _id: event['_id'], date: event['date'], talks: talksSpeakers };

  }
}
