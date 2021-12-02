import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RawgService {

  constructor(private client: HttpClient) { }

  baseUrl = "http://localhost:8090/Nova";

  httpOptions = {
    headers: new HttpHeaders({
      
    }),
    responseType: 'text' as 'json'
  };

  //Get Product Details
  getDetails(product:Product): Observable<string> {
    return this.client.get<string>(this.baseUrl+`/${product.productId}`, this.httpOptions).pipe(
      catchError(this.errorHandler)
    );
  }

  //Method for handling errors/exceptions
  errorHandler(error: any) {
    let message = "";
    if(error.error instanceof ErrorEvent) {
        //Get client-side error
        message = error.error.message;
    } else {
        //Get server-side error
        message = `Error Code: ${error.status}\nMessage: ${error.message}`;
    } 
    console.log(message);
    return throwError(() => new Error(message));
  }
}
