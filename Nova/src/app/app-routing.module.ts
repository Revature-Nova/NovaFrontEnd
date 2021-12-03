import { RegisterComponent } from './components/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './components/filter/filter.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LoginComponent } from "./components/login/login.component";
import { ProductComponent } from './components/product/product.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: LoginComponent },
  { path: 'navbar', component: NavbarComponent,
      children: [
        { path: 'userProfile', component: UserProfileComponent }
      ] },
  { path: 'products', component: FilterComponent },
  {path: 'page', component: PageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
