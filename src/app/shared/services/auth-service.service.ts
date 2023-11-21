/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { User } from '../declarations';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  user = new BehaviorSubject<User | null>(null);
  user$ = this.user.asObservable();

  constructor() {
    const _user = localStorage.getItem('user');
    const user = _user ? JSON.parse(_user) : null;

    this.user.next(user);
  }

  login(user: User): Observable<User | null> {
    localStorage.setItem('user', JSON.stringify(user));
    this.user.next(user);
    return this.user$;
  }

  logout(): Observable<User | null> {
    this.user.next(null);
    return this.user$;
  }

  isAuthenticated(): Observable<boolean> {
    const authenticated = new BehaviorSubject<boolean>(false);
    const authenticated$ = authenticated.asObservable();

    this.user$.subscribe((_user) => {
      authenticated.next(!!_user);
    });

    return authenticated$;
  }

  getUserInfo(): Observable<User | null> {
    return this.user$;
  }
}
