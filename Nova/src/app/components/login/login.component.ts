import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {CurrentUser} from "../../classes/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: '',
    });
  }

  /**
   * Send a post method to the server for user login
   *
   * @date 11/29/2021
   * @author Nova User Service
   */
  submit(): void {
    const loginValues = this.loginForm.getRawValue();

    if (this.loginForm.valid) {
      this.auth.login(loginValues)
        .subscribe(resp => {
          if (resp.headers.get("Authorization") != null) {
            sessionStorage.setItem("JWT", <string>resp.headers.get("Authorization"));

            CurrentUser.username = resp.body?.username;
            CurrentUser.message = resp.body?.message;
            CurrentUser.email = resp.body?.email;
            CurrentUser.state = resp.body?.state;

            this.router.navigate(['products']);
           
          } else {
            alert("Login Failed!")
          }
        });
    }

    this.loginForm.reset();
  }
}
