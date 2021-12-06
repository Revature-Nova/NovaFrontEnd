import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterComponent } from './components/filter/filter.component';
import { SplitComponent } from './components/split/split.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SearchFilterPipe } from './components/navbar/filter-pipe';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileService } from './services/user-profile.service';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilterComponent,
    SplitComponent,
    SearchFilterPipe,
    ProductPageComponent,
    UserProfileComponent,
    RegisterComponent,
    LoginComponent,
    ProductComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    NoopAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule

  ],


  providers: [UserProfileService],
  bootstrap: [AppComponent],
})
export class AppModule {}
