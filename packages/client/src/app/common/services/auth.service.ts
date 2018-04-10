import { Injectable, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {
  get isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  private collectionUrl = 'auth/token'
  // store the URL so we can redirect after logging in

  constructor(private http: HttpClient, @Inject('apiUrl') private apiUrl: string, private router: Router) { }

  login(auth) {
    this.http.post(`${this.apiUrl}/${this.collectionUrl}`, auth)
      .subscribe((auth) => {
        localStorage.setItem('token', auth['access_token']);
        if (localStorage.getItem('token')) {
          this.router.navigate(['admin']);
        }
      })
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }
}