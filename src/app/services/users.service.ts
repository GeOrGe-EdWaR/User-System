import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private _HttpClient: HttpClient) {}
  OnGetUsers(): Observable<any> {
    return this._HttpClient.get('users');
  }
  GetUserById(id: number): Observable<any> {
    return this._HttpClient.get(`users/${id}`);
  }
  onAddUser(data: UsersService): Observable<any> {
    return this._HttpClient.post('users/add', data);
  }
  onUpdateUser(data: UsersService, id: number): Observable<any> {
    return this._HttpClient.put(`users/${id}`, data);
  }
  GetCurrentUser(id: number): Observable<any> {
    return this._HttpClient.get(`user/me`);
  }
}
