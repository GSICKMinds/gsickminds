import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '@environments/environment';

@Injectable()
export class TeamService {

  private collectionUrl = '/members';

  constructor(private http: HttpClient) { }

  getMembers(): Promise<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}${this.collectionUrl}`)
      .map(members => members.map(member => {
        member.photo = member.photo || 'assets/images/team/avatar.png';
        return member;
      }))
      .map(members => members.map(this.generateSocial))
      .toPromise();
  }

  save(id: string, member) {
    return this.http.put(`${environment.apiUrl}${this.collectionUrl}/${id}`, member)
      .subscribe(console.log);
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
