import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

   baseUrl = 'http://localhost:8090/Nova';
  //baseUrl = 'http://18.212.102.32:8082/product-service/Nova'

  constructor(private client: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=utf-8'
    }),
  };

  //get all products
  getProducts(): Observable<Product[]> {
    return this.client.get<Product[]>(this.baseUrl + "/display").pipe(
      catchError(this.errorHandler)
    )
  }

  //Search Specific Product based on Title
  searchProduct(title: String): Observable<Product[]> {
    return this.client.get<Product[]>(this.baseUrl + "/title/" + title).pipe(
      catchError(this.errorHandler)
    )
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
