import { Component, OnInit } from '@angular/core';
import { IAuth } from '@models/models';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'gsic-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group(new Auth());
    if (this.authService.isLoggedIn) {
      this.router.navigate(['admin']);
    }
  }

  onSubmit() {
    this.authService.login(this.loginForm.value);
  }

}


class Auth implements IAuth {
  username;
  password;
  constructor() {
    this.username = '';
    this.password = '';
  }
}