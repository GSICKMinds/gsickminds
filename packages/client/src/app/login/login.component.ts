import { Component, OnInit } from '@angular/core';
import { IAuth } from '../../models';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '@services';

@Component({
  selector: 'gsic-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm
  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.fb.group(new Auth());
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