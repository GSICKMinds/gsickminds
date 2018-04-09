import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '@environments/environment';

@Injectable()
export class SpeakersService {
  private collectionUrl = '/events';

  constructor(private http: HttpClient) { }

  getAll(eventId, talkId) {
    return this.http.get<any[]>(`${environment.apiUrl}${this.collectionUrl}/${eventId}/talks/${talkId}/speakers`)
      .map(speakers => speakers.map(this.generateSocial))
      .toPromise();
  }

  update(eventId, talkId, speakerId, speaker) {
    return this.http.put(`${environment.apiUrl}${this.collectionUrl}/${eventId}/talks/${talkId}/speakers/${speakerId}`, speaker).toPromise();
  }

  create(eventId, talkId, speaker) {
    return this.http.post(`${environment.apiUrl}${this.collectionUrl}/${eventId}/talks/${talkId}/speakers`, speaker).toPromise();
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
