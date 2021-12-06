import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

@Input() username!: string;
@Input() email!: string;

profileForm: FormGroup | any;

constructor(private formBuilder: FormBuilder, private profile: UserProfileService, private http: HttpClient ) { }

ngOnInit(): void {

  this.form = this.formBuilder.group({
      username: '',
      email: '',
      state: '',
      favoriteGenre: '',
      message: ''
    })
  }

  submit(): void {
    console.log(this.form.getRawValue());
    this.http
      .post('http://localhost:8082/user-service/Nova/user/profile', this.form.getRawValue())
      .subscribe((res) => {
        console.log(res);
      });
  }
}
