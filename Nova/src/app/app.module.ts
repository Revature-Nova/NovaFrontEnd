import { RegisterComponent } from './components/register/register.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterComponent } from './components/filter/filter.component';
import { SplitComponent } from './components/split/split.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SearchFilterPipe } from './components/navbar/filter-pipe';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileService } from './services/user-profile.service';
import { LoginComponent } from "./components/login/login.component";


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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    NoopAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [UserProfileService],
  bootstrap: [AppComponent]
})
export class AppModule {}
