import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { newUser, returningUser } from "../interfaces/user";
import { catchError, Observable, retry, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private client:HttpClient) {}

  private url = 'http://localhost:8089/Nova/';

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError(() => error);
  }

  registerUser( newUser: newUser ): Observable<newUser> {
      return this.client
        .post<newUser>(this.url + 'register', newUser, this.httpOptions)
        .pipe(retry(1), catchError(this.handleError));
  }

  login( returningUser : returningUser ): Observable<returningUser> {
    return this.client
      .post<returningUser>(this.url + 'login', returningUser, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
}
