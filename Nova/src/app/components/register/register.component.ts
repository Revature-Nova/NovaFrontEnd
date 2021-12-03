import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;


  constructor(private formBuilder: FormBuilder, private auth:AuthService, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: new FormControl('', [
        Validators.required]),

      lastName: new FormControl('', [
        Validators.required]),

      username: new FormControl('',[
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9]*$"),
        Validators.minLength(5),
        Validators.maxLength(20)]),

      email: new FormControl('',[
        Validators.required,
        Validators.email]),

      password: new FormControl('',[
        Validators.required,
        Validators.pattern("(?!.* )(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,25}$")]),
    });
  }

  get firstName() { return this.registerForm.get('firstName') }
  get lastName() { return this.registerForm.get('lastName') }
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
    const registerValues = this.registerForm.getRawValue();

    if (this.registerForm.valid) {
      this.auth.registerUser(registerValues)
        .subscribe(res => {
          if (res.status === "Successfully Registered!") {
            alert(res.status)
              this.router.navigate(['/login']);
          } else {
            alert("Register Failed!")
          }
        });
    }

    this.registerForm.reset();
  }
}
