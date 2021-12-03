import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: "",
      // email: '',
      password: "",
    });
  }

  //submit to the back end
  submit(): void {
    console.log(this.form.getRawValue());
    this.http
      .post("http://localhost:8080/authenticate", this.form.getRawValue())
      .subscribe((res) => {
        console.log(res);
      });
  }
}
