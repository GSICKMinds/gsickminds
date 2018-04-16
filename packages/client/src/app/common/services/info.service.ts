import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Contribution, SponsorType, Venue } from '@models/classes';
import { IData } from '@models/models';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class InfoService {

  private collectionInfoUrl = '/info';
  private collectionVenueUrl = '/venue';
  private collectionSponsorsUrl = '/info/sponsors';
  private collectionContributionUrl = '/contribution';

  constructor(@Inject('apiUrl') private apiUrl: string, private http: HttpClient) { }

  getInfo() {
    return this.http.get<IData>(`${this.apiUrl}${this.collectionInfoUrl}`)
      .map(data => data.info)
      .toPromise();
  }

  updateInfo(info) {
    return this.http.put(`${this.apiUrl}${this.collectionInfoUrl}`, info).toPromise();
  }

  getVenue() {
    return this.http.get<IData>(`${this.apiUrl}${this.collectionVenueUrl}`)
      .map(data => (data && 'venue' in data) ? data.venue : new Venue({}))
      .toPromise();
  }

  updateVenue(venue) {
    return this.http.put(`${this.apiUrl}${this.collectionVenueUrl}`, venue).toPromise();
  }

  getContribution() {
    return this.http.get<IData>(`${this.apiUrl}${this.collectionContributionUrl}`)
      .map(data => (data && 'contribution' in data) ? data.contribution : new Contribution({}))
      .toPromise();
  }

  updateContribution(contribution) {
    return this.http.put(`${this.apiUrl}${this.collectionContributionUrl}`, contribution).toPromise();
  }

  getSponsors() {
    return this.http.get<IData>(`${this.apiUrl}${this.collectionSponsorsUrl}`)
      .map(data => (data && 'sponsors' in data) ? data.sponsors : [])
      .toPromise();
  }

  updateSponsors(sponsors) {
    return this.http.put(`${this.apiUrl}${this.collectionSponsorsUrl}`, sponsors).toPromise();
  }

}
