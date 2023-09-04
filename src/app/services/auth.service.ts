import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../models/user';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private bddURL = 'http://localhost:3000/api/users';
 
  constructor(private http: HttpClient) { 
  }

  login(email: string, password: string): Observable<Login>{
    const body = {email: email, password :password}
    const headers = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('access_token')})
    return this.http.post<Login>(this.bddURL + '/login', body, {headers: headers})
  }


}
