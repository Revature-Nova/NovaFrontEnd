import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';


const routes: Routes = [

  {path: 'product-page', component: ProductPageComponent},
    {path: 'navbar', component: NavbarComponent,
      children: [
        {path: 'userProfile', component: UserProfileComponent}
      ]
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
