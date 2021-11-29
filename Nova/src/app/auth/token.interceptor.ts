@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public authService: AuthService) {}

  //Process every outgoing request processed by HTTP Client
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //check if JWT token is available
    if (this.authService.getJwtToken()) {
      //attacch token to outgoing request
      request = this.addToken(request, this.authService.getJwtToken());
    }

    //takes care of errors, 401 error or unauthorize error
    return next.handle(request).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          return this.handle401Error(request, next);
        } else {
          return throwError(error);
        }
      })
    );
  }

  //takes request and set authorization value to bearer token
  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
