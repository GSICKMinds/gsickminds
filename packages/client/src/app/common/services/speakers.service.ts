import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class SpeakersService {
  private collectionUrl = '/events';

  constructor(@Inject('apiUrl') private apiUrl: string, private http: HttpClient) { }

  getAll(eventId, talkId) {
    return this.http.get<any[]>(`${this.apiUrl}${this.collectionUrl}/${eventId}/talks/${talkId}/speakers`)
      .map(speakers => speakers.map(speaker => {
        speaker.photo = speaker.photo || 'assets/images/team/avatar.png';
        return speaker;
      }))
      .map(speakers => speakers.map(this.generateSocial))
      .toPromise();
  }

  update(eventId, talkId, speakerId, speaker) {
    return this.http.put(`${this.apiUrl}${this.collectionUrl}/${eventId}/talks/${talkId}/speakers/${speakerId}`, speaker).toPromise();
  }

  create(eventId, talkId, speaker) {
    return this.http.post(`${this.apiUrl}${this.collectionUrl}/${eventId}/talks/${talkId}/speakers`, speaker).toPromise();
  }

  private generateSocial(member) {
    return {
      ...member,
      social: {
        linkedin: member.linkedin,
        twitter: member.twitter,
        github: member.github
      }
    }
  }
}
