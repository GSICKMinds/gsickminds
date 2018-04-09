import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '@environments/environment';

@Injectable()
export class InfoService {

  private collectionUrl = '/info';

  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get(`${environment.apiUrl}${this.collectionUrl}`).toPromise();
  }

  save(infoId, info) {
    this.http.put(`${environment.apiUrl}${this.collectionUrl}/${infoId}`, info)
      .subscribe(console.log);
  }

}
