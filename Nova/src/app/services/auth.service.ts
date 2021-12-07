import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from "@angular/common/http";
import { newUser, returningUser } from "../interfaces/user";
import { catchError, Observable, retry, throwError } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private client: HttpClient) {}

  // private url = 'http://18.212.102.32:8082/user-service/Nova/';

  private url = 'http://localhost:8082/user-service/Nova/';

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError(() => error);
  }

  registerUser( newUser: newUser ): Observable<HttpResponse<newUser>> {
    return this.client
      .post<newUser>(this.url + 'register', newUser, {observe: 'response'})
      .pipe(retry(1), catchError(this.handleError));
  }

  login( returningUser : returningUser ): Observable<HttpResponse<returningUser>> {
    return this.client
      .post<returningUser>(this.url + 'login', returningUser, {observe: 'response'})
      .pipe(retry(1), catchError(this.handleError));
      
  }

  logout(): Observable<HttpResponse<any>>{
    return this.client
      .put<any>(this.url + 'logout', null,{observe: 'response'})
      .pipe(catchError(this.handleError))
  }
}
