/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { User } from '../../models';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<User | null>(null);
  user$ = this.user.asObservable();

  constructor(private http: HttpClient, private loadingService: LoadingService) {
    this.getUserInfo();
  }

  login(login: string, password: string): Observable<User | null> {
    this.loadingService.setLoading(true);

    const req = this.http.post<{
      token: string;
    }>('http://localhost:3004/auth/login', { login, password });
    req.subscribe((res) => {
      const token = res?.token;
      localStorage.setItem('token', token || '');
      this.getUserInfo();

      this.loadingService.setLoading(false);
    });

    return this.user$;
  }

  logout(): Observable<User | null> {
    localStorage.removeItem('token');
    this.user.next(null);
    return this.user$;
  }

  isAuthenticatedSync(): boolean {
    return !!localStorage.getItem('token');
  }

  isAuthenticated(): Observable<boolean> {
    return this.user$.pipe(
      map((data) => {
        return !!data
      })
    );
  }

  getUserInfo(): Observable<User | null> {
    this.loadingService.setLoading(true);

    const token = localStorage.getItem('token');
    if(!token) {
      this.loadingService.setLoading(false);
      return this.user$;
    }
    
    const req = this.http.post<User>('http://localhost:3004/auth/userinfo', { token });
    req.subscribe((res) => {
      this.user.next(res || null);
      this.loadingService.setLoading(false);
    });

    return this.user$;
  }
}
