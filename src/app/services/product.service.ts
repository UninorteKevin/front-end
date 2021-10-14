import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get('/api/products/list', {headers: headers});
  }

  getProduct(codigo: String): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get('/api/products/' + codigo, {headers: headers});
  }
}
