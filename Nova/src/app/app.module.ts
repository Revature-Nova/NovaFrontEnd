import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterComponent } from './components/filter/filter.component';
import { SplitComponent } from './components/split/split.component';
import { SearchFilterPipe } from './components/navbar/filter-pipe';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileService } from './services/user-profile.service';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './cart/cart.component';
import {AuthService} from "./services/auth.service";
import {InterceptorComponent} from "./components/interceptor/interceptor.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorComponent, multi: true },
      UserProfileService
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}
