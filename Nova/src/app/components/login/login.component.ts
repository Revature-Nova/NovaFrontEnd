import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: '',
      password: '',
    });
  }

  /**
   * Send a post method to the server for registering a user
   *
   * @date 11/29/2021
   * @author Nova User Service
   */
  submit(): void {
    console.log(this.form.getRawValue());
    this.http
      .post('http://localhost:8089/Nova/login', this.form.getRawValue())
      .subscribe((res) => {
        console.log(res);
      });
  }
}
