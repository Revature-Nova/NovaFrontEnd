import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      username: new FormControl('',[
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9]*$")]),
      email: new FormControl('',[
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl('',[
        Validators.required,
        Validators.pattern("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,25}$")]),
    });
  }

  get firstName(){ return this.registerForm.get('firstName') }
  get lastName(){ return this.registerForm.get('lastName') }
  get username(){ return this.registerForm.get('username') }
  get email(){ return this.registerForm.get('email') }
  get password(){ return this.registerForm.get('password') }

  /**
   * Send a post method to the server for registering a user
   *
   * @date 11/29/2021
   * @author Nova User Service
   */
  submit(): void {
    console.log(this.registerForm.getRawValue());
    this.http
      .post('http://localhost:8089/Nova/register', this.registerForm.getRawValue())
      .subscribe((res) => {
        console.log(res);
      });
  }
}
