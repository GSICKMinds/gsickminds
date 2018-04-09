import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AuthService {
  isLoggedIn = false;
  private collectionUrl = 'auth/token'
  // store the URL so we can redirect after logging in

  constructor(private http: HttpClient, @Inject('apiUrl') private apiUrl: string) { }

  login(auth) {
    this.http.post(`${this.apiUrl}/${this.collectionUrl}`, auth)
      .map(auth => localStorage.setItem('token', auth['access_token']))
      .subscribe()
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}