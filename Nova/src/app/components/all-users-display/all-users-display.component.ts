import {Component, OnInit} from '@angular/core';
import {UserProfileService} from 'src/app/services/user-profile.service';
import {Router} from "@angular/router";
import {UserProfileComponent} from "../user-profile/user-profile.component";

@Component({
  selector: 'app-all-users-display',
  templateUrl: './all-users-display.component.html',
  styleUrls: ['./all-users-display.component.scss']
})
export class AllUsersDisplayComponent implements OnInit {

  constructor(private profile: UserProfileService,
              private router: Router,
              private userProfile: UserProfileComponent) { }

  username!: Array<string> | string[];

  ngOnInit(): void {
    this.displayProfiles();
  }

  displayProfiles() {
    return this.profile.displayProfiles()
      .subscribe((res) => {
      this.username = res.Username;
    });
  }

  fetchProfile(username: string) {
    let profile = this.profile
      .getUserProfile(username);

    this.userProfile.populateProfile(profile);
  }
}
