import { Injectable } from '@angular/core';
import { registerUser } from '../interfaces/register';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:8089/Nova/register';

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {}

   /**
    * Register A User
    * @author Gregg Friedman, Travis Hood
    * @param newUser
    * @returns
    * Once a new user registers, they are redirected to the login page.
    */
       registerUser(body: Object): Observable<registerUser[]> {
         console.log(body);
         body = JSON.stringify(body);
         return this.http
         .post<registerUser []>(this.url, body, this.httpOptions)
         .pipe(
           catchError(this.handleError)
         );
       }

       handleError(error: HttpErrorResponse) {
         alert(error);
         return throwError(() => error);
       };
}
