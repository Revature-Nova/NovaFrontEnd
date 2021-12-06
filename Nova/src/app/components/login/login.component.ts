import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import {CurrentUser} from "../../interfaces/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private auth: AuthService) {}

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
            CurrentUser.username = this.loginForm.get("username");
            alert("Login Successful!")
          } else {
            alert("Login Failed!")
          }
        });
    }

    this.loginForm.reset();
  }
}
