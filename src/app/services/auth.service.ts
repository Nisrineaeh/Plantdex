import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private bddURL = 'http://localhost:3000/api/users';
 

  constructor(private http: HttpClient) { 
  }

  login(email: string, password: string): Observable<any>{
    const body = {email: email, password :password}
    return this.http.post(this.bddURL + '/login', body)
  }


}
