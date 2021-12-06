import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
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
        .subscribe(res => {
          if (res.token != null) {
            sessionStorage.setItem("JWT", res.token);
            alert("Login Successful!")
            this.router.navigate(['/home']);
          } else {
            alert("Login Failed!")
          }
        });
    }

    this.loginForm.reset();
  }

  

}
