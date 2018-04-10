import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class InfoService {

  private collectionUrl = '/info';

  constructor(@Inject('apiUrl') private apiUrl: string, private http: HttpClient) { }

  getInfo() {
    return this.http.get(`${this.apiUrl}${this.collectionUrl}`).toPromise();
  }

  update(infoId, info) {
    return this.http.put(`${this.apiUrl}${this.collectionUrl}/${infoId}`, info).toPromise();
  }

}
