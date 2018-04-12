import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { MessageService } from '@services/message.service';


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
    return this.http.put(`${this.apiUrl}${this.collectionUrl}/${id}`, member)
      .toPromise();
  }

  create(member) {
    return this.http.post(`${this.apiUrl}${this.collectionUrl}`, member)
      .toPromise();
  }

  delete(memberId) {
    return this.http.delete(`${this.apiUrl}${this.collectionUrl}/${memberId}`).toPromise();
  }

  private generateSocial(member) {
    const socialArray = ['linkedin', 'twitter', 'github'];
    let hasSocial = socialArray.some(key => !!member[key]);
    if (hasSocial) {
      member = {
        ...member,
        social: {
          linkedin: member.linkedin,
          twitter: member.twitter,
          github: member.github
        }
      }
    }

    return member;
  }
}
