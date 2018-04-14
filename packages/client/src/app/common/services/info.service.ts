import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class InfoService {

  private collectionInfoUrl = '/info';
  private collectionVenueUrl = '/venue';
  private collectionSponsorsUrl = '/sponsors';
  private collectionContributionUrl = '/contribution';

  constructor(@Inject('apiUrl') private apiUrl: string, private http: HttpClient) { }

  getInfo() {
    return this.http.get(`${this.apiUrl}${this.collectionInfoUrl}`).toPromise();
  }

  updateInfo(info) {
    return this.http.put(`${this.apiUrl}${this.collectionInfoUrl}`, info).toPromise();
  }

  getVenue() {
    return this.http.get(`${this.apiUrl}${this.collectionVenueUrl}`).toPromise();
  }

  updateVenue(venue) {
    return this.http.put(`${this.apiUrl}${this.collectionVenueUrl}`, venue).toPromise();
  }

  getContribution() {
    return this.http.get(`${this.apiUrl}${this.collectionContributionUrl}`).toPromise();
  }

  updateContribution(contribution) {
    return this.http.put(`${this.apiUrl}${this.collectionContributionUrl}`, contribution).toPromise();
  }

  getSponsors() {
    return this.http.get(`${this.apiUrl}${this.collectionSponsorsUrl}`).toPromise();
  }

  updateSponsors(sponsors) {
    return this.http.put(`${this.apiUrl}${this.collectionSponsorsUrl}`, sponsors).toPromise();
  }

}
