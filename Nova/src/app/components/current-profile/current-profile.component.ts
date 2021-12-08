import {Component, OnInit} from '@angular/core';
import {UserProfileService} from 'src/app/services/user-profile.service';
import {HttpClient} from '@angular/common/http';
import {CurrentUser} from '../../classes/user';
import {profile} from '../../interfaces/profile';
import {FormBuilder, FormGroup} from '@angular/forms';
import {faUser} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-current-profile',
  templateUrl: './current-profile.component.html',
  styleUrls: ['./current-profile.component.scss'],
})
export class CurrentProfileComponent implements OnInit {

  form: FormGroup | any;
  email!: string | "" | undefined;
  state!: string | "" | undefined;
  favoriteGenre!: string | "" | undefined;
  message!: string | "" | undefined;
  userIcon = faUser;

  username = CurrentUser.username;

  private url = 'http://localhost:8082/user-service/Nova/user';

  constructor(
    private formBuilder: FormBuilder,
    private profile: UserProfileService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getMyProfile();

    this.form = this.formBuilder.group({
      email: '',
      state: '',
      favoriteGenre: '',
      message: '',
    });

    CurrentProfileComponent.prototype.email = CurrentUser.email;
    CurrentProfileComponent.prototype.state = CurrentUser.state;
    CurrentProfileComponent.prototype.favoriteGenre = CurrentUser.favoriteGenre;
    CurrentProfileComponent.prototype.message = CurrentUser.message;
  }

  submit() {
    console.log(this.form.getRawValue());
    this.http
      .post<profile>(this.url + '/profile/set',
        this.form.getRawValue(),
        { observe: 'response' }
      )
      .subscribe((res) => {
        CurrentUser.email = res.body?.email;
        CurrentUser.state = res.body?.state;
        CurrentUser.favoriteGenre = res.body?.favoriteGenre;
        CurrentUser.message = res.body?.message;
      });
  }

  getMyProfile(){
    return this.profile.currentProfile()
      .subscribe(res => {
        CurrentUser.email = res.body?.email;
        CurrentUser.state = res.body?.state;
        CurrentUser.favoriteGenre = res.body?.favoriteGenre;
        CurrentUser.message = res.body?.message;
    })
  }
}
