import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class TeamService {

  private collectionUrl = '/members';

  constructor(@Inject('apiUrl') private apiUrl: string, private http: HttpClient) { }

  getMembers(): Promise<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}${this.collectionUrl}`)
      .map(members => members.map(member => {
        member.photo = member.photo || 'assets/images/team/avatar.png';
        return member;
      }))
      .map(members => members.map(this.generateSocial))
      .toPromise();
  }

  update(id: string, member) {
    return this.http.put(`${this.apiUrl}${this.collectionUrl}/${id}`, member).toPromise();
  }

  create(member) {
    return this.http.post(`${this.apiUrl}${this.collectionUrl}`, member).toPromise();
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
