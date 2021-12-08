import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FilterComponent} from './components/filter/filter.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {CurrentProfileComponent} from './components/current-profile/current-profile.component';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from "./components/login/login.component";
import {CartComponent} from './components/cart/cart.component';
import {AllUsersDisplayComponent} from "./components/all-users-display/all-users-display.component";
import {UserProfileComponent} from "./components/user-profile/user-profile.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'user/profile', component: CurrentProfileComponent},
  { path: "user/profile/:username", component: UserProfileComponent},
  { path: 'products', component: FilterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: "cart", component: CartComponent},
  { path: "profile/all", component: AllUsersDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
