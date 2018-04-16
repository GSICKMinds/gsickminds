import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ISponsor } from '@models/models';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class SponsorsService {
  private collectionUrl = '/sponsors';

  constructor(@Inject('apiUrl') private apiUrl: string, private http: HttpClient) { }

  update(sponsorId: string, sponsor: ISponsor) {
    return this.http.put(`${this.apiUrl}${this.collectionUrl}/${sponsorId}`, sponsor).toPromise();
  }

  create(sponsor: ISponsor) {
    return this.http.post(`${this.apiUrl}${this.collectionUrl}`, sponsor).toPromise();
  }

  getAll(all?: string) {
    const params = (all) ? new HttpParams().set('all', all) : {};
    return this.http.get<ISponsor[]>(`${this.apiUrl}${this.collectionUrl}`, { params }).toPromise();
  }
  delete(sponsorId: string) {
    return this.http.delete(`${this.apiUrl}${this.collectionUrl}/${sponsorId}`).toPromise();
  }

}

