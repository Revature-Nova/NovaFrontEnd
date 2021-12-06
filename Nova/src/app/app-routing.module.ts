
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './components/filter/filter.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from "./components/login/login.component";
import { LogoutComponent } from './components/logout/logout.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'home', component: NavbarComponent},
  { path: 'userProfile', component: UserProfileComponent},
      // children: [
      //   { path: 'userProfile', component: UserProfileComponent},
      // ]},
  { path: 'products', component: FilterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
