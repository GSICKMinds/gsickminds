import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Auth } from '@models/classes';

@Component({
  selector: 'gsic-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

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
