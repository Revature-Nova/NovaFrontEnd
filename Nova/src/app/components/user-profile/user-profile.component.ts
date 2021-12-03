import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserProfileService } from 'src/app/services/user-profile.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  @Input() username!: string;
 

  profileForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder, private profile: UserProfileService ) { }

  ngOnInit(): void {

    this.profileForm = this.formBuilder.group({
      username: '',
      email: '',
      state: '',
      favoriteGenre: '',
      message: ''
    })
  }

  userProfile() {
    const val = this.profileForm.getRawValue();
    this.profile.userProfile(val).subscribe(
      res => {
        console.log(res)
        alert("You have finished creating your user profile " + val.username+ " !")
      }
    )
    this.profileForm.reset();
  }

}
