import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { profile } from '../interfaces/profile';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  private apiUrl = "http://localhost:8089/Nova/"


  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json;charset=utf-8'})
  }
  constructor(private http: HttpClient) { }

  /**
   * @author Erika Johnson
   * @param profile 
   * @returns 
   *Logged in users are able to create their own User Profile
   */

  userProfile(profile: profile) :Observable<profile> {
    return this.http.post<profile>(
      this.apiUrl + 'user/userProfile', 
      JSON.stringify(profile),
      this.httpOptions
    )
    .pipe(retry(1), catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    console.log(error)
    return throwError(() => error)
  }
}
