import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {



profileForm: FormGroup | any;

constructor(private formBuilder: FormBuilder, private profile: UserProfileService, private http: HttpClient) { }

ngOnInit(): void {

  this.profileForm = this.formBuilder.group({
      email: '',
      state: '',
      favoriteGenre: '',
      message: ''
    })
  }
userProfile(){
  const val = this.profileForm.getRawValue()
    this.profile.userProfile(val)
    .subscribe(res=> {
      console.log(res)
      alert("You have successfully completed your User Profile!")
    })
    this.profileForm.reset();
  }
}
