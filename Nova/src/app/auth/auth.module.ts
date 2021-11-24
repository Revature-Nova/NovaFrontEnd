import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  // declarations...
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  // imports...
})
export class AuthModule {}
