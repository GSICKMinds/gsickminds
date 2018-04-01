import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TeamService {

  private memberUrl = 'http://localhost:3000/members';

  constructor(private http: HttpClient) { }

  getMembers(): Promise<any[]> {
    return this.http.get<any[]>(this.memberUrl).toPromise();
  }


  save(id: string, member) {
    return this.http.put(`${this.memberUrl}/${id}`, member)
      .subscribe(console.log);
  }
}
