import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class InterceptorComponent implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem("JWT");

    if (!token) {
      return next.handle(req);
    }

    const req1 = req.clone({
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json;charset=utf-8')
        .set('Authorization', `${token}`)
    })

    return next.handle(req1);
  }

}
