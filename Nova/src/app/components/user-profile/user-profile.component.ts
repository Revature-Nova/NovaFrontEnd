import {Component} from '@angular/core';
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {Observable} from "rxjs";
import {HttpResponse} from "@angular/common/http";
import {profileInfo} from "../../classes/user";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})

export class UserProfileComponent {
  username!: string;
  email!: string;
  state!: string;
  favoriteGenre!: string;
  message!: string;
  userIcon = faUser;

  constructor() { }

  ngOnInit(): void {
  }

  populateProfile(profile: Observable<HttpResponse<profileInfo>>){
    profile.subscribe(res => {
      UserProfileComponent.prototype.username = Object.values(res.body?.Username).join("");
      UserProfileComponent.prototype.message = Object.values(res.body?.Message).join("");
      UserProfileComponent.prototype.state = Object.values(res.body?.State).join("");
      UserProfileComponent.prototype.email = Object.values(res.body?.Email).join("");
      UserProfileComponent.prototype.favoriteGenre = Object.values(res.body?.FavoriteGenre).join("");
    });
  }

  displayProfiles() {
    this.profile.displayProfiles().subscribe((res) => {
      console.log(res);
    });
  }
}
