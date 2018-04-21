import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ISponsor } from '@models/models';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class SponsorsService {

  constructor(@Inject('apiUrl') private apiUrl: string, private http: HttpClient) { }

  update(eventId: string, sponsorId: string, sponsor: ISponsor) {
    return this.http.put(`${this.apiUrl}${this.collectionUrl(eventId, sponsorId)}`, sponsor).toPromise();
  }

  create(eventId: string, sponsor: ISponsor) {
    return this.http.post(`${this.apiUrl}${this.collectionUrl(eventId)}`, sponsor).toPromise();
  }

  getAll(eventId: string) {
    return this.http.get<ISponsor[]>(`${this.apiUrl}${this.collectionUrl(eventId)}`).toPromise();
  }

  delete(eventId: string, sponsorId: string) {
    return this.http.delete(`${this.apiUrl}${this.collectionUrl(eventId, sponsorId)}`).toPromise();
  }

  private collectionUrl(eventId, sponsorId?) {
    let url = `/events/${eventId}/sponsors`;
    if (sponsorId) {
      url += `/${sponsorId}`;
    }

    return url;


  }

}

