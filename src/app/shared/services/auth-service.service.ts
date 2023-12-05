/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { User } from '../declarations';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  user = new BehaviorSubject<User | null>(null);
  user$ = this.user.asObservable();

  constructor(private http: HttpClient) {
    this.getUserInfo();
  }

  login(login: string, password: string): Observable<User | null> {
    const req = this.http.post<{
      token: string;
    }>('http://localhost:3004/auth/login', { login, password });
    req.subscribe((res) => {
      const token = res?.token;
      localStorage.setItem('token', token || '');
      this.getUserInfo();
    });

    return this.user$;
  }

  logout(): Observable<User | null> {
    localStorage.removeItem('token');
    this.user.next(null);
    return this.user$;
  }

  isAuthenticated(): Observable<boolean> {
    return this.user$.pipe(
      map((data) => {
        return !!data
      })
    );
  }

  getUserInfo(): Observable<User | null> {
    const token = localStorage.getItem('token');

    if(!token) return this.user$;
    
    const req = this.http.post<User>('http://localhost:3004/auth/userinfo', { token });
    req.subscribe((res) => {
      this.user.next(res || null);
    });

    return this.user$;
  }
}
