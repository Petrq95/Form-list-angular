import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getUserById(payload: number): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${payload}`);
  }

  updateUser(customer: User): Observable<User> {
    return this.http.patch<User>(
      `${this.usersUrl}/${customer.id}`,
      customer
    );
  }

  deleteUser(payload: number) {
    return this.http.delete(`${this.usersUrl}/${payload}`);
  }
}
