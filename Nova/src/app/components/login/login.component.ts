import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
import { FormBuilder, FormGroup } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
=======
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
=======
import { FormGroup, FormBuilder } from '@angular/forms';
>>>>>>> c4a4129bac5fffb1c32577fbd7e5ef321928b9b0
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {CurrentUser} from "../../classes/user";
<<<<<<< HEAD
>>>>>>> 30f0efedd78b6e5ba50acd146caa1a40ae835da4
=======
>>>>>>> c4a4129bac5fffb1c32577fbd7e5ef321928b9b0

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
        .subscribe(resp => {
          if (resp.status == HttpStatusCode.Accepted) {
            sessionStorage.setItem("JWT", <string>resp.headers.get("Authorization"));
<<<<<<< HEAD
<<<<<<< HEAD
            alert("Login Successful!")
=======

=======
    
>>>>>>> c4a4129bac5fffb1c32577fbd7e5ef321928b9b0
            CurrentUser.username = resp.body?.username;
            CurrentUser.message = resp.body?.message;
            CurrentUser.email = resp.body?.email;
            CurrentUser.state = resp.body?.state;
          
            this.router.navigate(['products']);
           
<<<<<<< HEAD
>>>>>>> 30f0efedd78b6e5ba50acd146caa1a40ae835da4
=======
>>>>>>> c4a4129bac5fffb1c32577fbd7e5ef321928b9b0
          } else {
            alert("Login Failed!")
          }
        });
    }

    this.loginForm.reset();
  }
}
