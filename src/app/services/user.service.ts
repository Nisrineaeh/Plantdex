import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Plant } from '../models/plant';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private bddUrl = 'http://localhost:3000/api/users'

  constructor(private http: HttpClient) { }

  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.bddUrl);
  }

  getUserById(id:number){
    return this.http.get<User>(`${this.bddUrl}/${id}`)
  }

  signUp(user: User): Observable<User>{
    return this.http.post<User>(`${this.bddUrl}/signup`, user)
  }

  getFavoritePlant(userId:number): Observable<Plant[]>{
    return this.http.get<Plant[]>(`${this.bddUrl}/${userId}/favorites`)
  }
}
