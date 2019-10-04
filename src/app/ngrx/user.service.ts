
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';

   headersTodel = new HttpHeaders ({
    'Content-Type' : 'aplication/json',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",

  });

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${id}`);
  }

  updateUser(user: User): Observable<User> {
    return this.http.patch<User>(`${this.usersUrl}/${user.id}`,
      user
    );
  }

  deleteUser(id: number){
    return this.http.delete(`${this.usersUrl}/${id}`,)
  }
}
