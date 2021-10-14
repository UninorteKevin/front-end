import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: String;
  constructor(private http: HttpClient) {
    this.url = global.url;
   }

  onLogin(email: String, password: String):Observable<any>{
    let params = JSON.stringify({"email":email, "password":password});
    let headers = new HttpHeaders().set('Content-Type', "application/json");
    return this.http.post('/api/login', params, {headers: headers});
  }

  addUser(user): Observable<any>{
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', "application/json");
    return this.http.post('/api/user/add', params, {headers: headers}); 
  }
  getIdentity(){
    let identity = JSON.parse(localStorage.getItem('identity'));
    return identity;
  }
}
