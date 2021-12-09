import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, Observable, retry, throwError} from 'rxjs';
import {profile} from '../interfaces/profile';
import {identifiers, profileInfo} from "../classes/user";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {


  private apiUrl = "http://18.212.102.32:8082/user-service/Nova/user"


  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json;charset=utf-8'})
  }
  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    return throwError(() => error)
  }

  currentProfile(): Observable<any>{
    return this.http
      .get<profile>(this.apiUrl + '/profile', {observe: 'response'})
      .pipe(catchError(this.handleError))
  }

  displayProfiles(): Observable<identifiers>{
    return this.http
      .get<identifiers>(this.apiUrl + '/profile/all', this.httpOptions)
      .pipe(retry(1), catchError(this.handleError))
  }

  getUserProfile(username: string): Observable<HttpResponse<profileInfo>>{
    return this.http
      .get<profileInfo>(this.apiUrl + '/profile/' + username, {observe: 'response'})
      .pipe(retry(1), catchError(this.handleError))
  }

  updateProfile(form: FormGroup){
    return this.http
      .post<profile>(this.apiUrl + '/profile/set',
        form.getRawValue(),
        { observe: 'response' }
      );
  }
}
