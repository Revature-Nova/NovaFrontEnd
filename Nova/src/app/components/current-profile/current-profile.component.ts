import {Component, OnInit} from '@angular/core';
import {UserProfileService} from 'src/app/services/user-profile.service';
import {CurrentUser} from '../../classes/user';
import {FormBuilder, FormGroup} from '@angular/forms';
import {faUser} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-current-profile',
  templateUrl: './current-profile.component.html',
  styleUrls: ['./current-profile.component.scss'],
})
export class CurrentProfileComponent implements OnInit {

  form: FormGroup | any;
  email!: string | any;
  state!: string | any;
  favoriteGenre!: string | any;
  message!: string | any;
  userIcon = faUser;

  username = sessionStorage.getItem("Username");

  constructor(
    private formBuilder: FormBuilder,
    private profile: UserProfileService,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      state: '',
      favoriteGenre: '',
      message: '',
    });

    this.getMyProfile();
  }

  submit() {
    return this.profile.updateProfile(this.form)
      .subscribe((res) => {
        this.setDataFromResponse(res);
      });
  }

  getMyProfile(){
    return this.profile.currentProfile()
      .subscribe(res => {
        this.setDataFromResponse(res);
    })
  }

  setDataFromResponse(res: any){
    CurrentUser.Email = res.body?.Email;
    this.email = Object.values(CurrentUser.Email).pop();

    CurrentUser.Message = res.body?.Message;
    this.message = Object.values(CurrentUser.Message).pop();

    CurrentUser.FavoriteGenre = res.body?.FavoriteGenre;
    this.favoriteGenre = Object.values(CurrentUser.FavoriteGenre).pop();

    CurrentUser.State = res.body?.State;
    this.state = Object.values(CurrentUser.State).pop();
  }
}
