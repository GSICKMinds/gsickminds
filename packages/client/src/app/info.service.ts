import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class InfoService {

  private infoUrl = 'http://localhost:3000/info';

  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get(this.infoUrl).toPromise();
  }

  save(infoId, info) {
    this.http.put(`${this.infoUrl}/${infoId}`, info)
      .subscribe(console.log);
  }

}
