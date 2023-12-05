import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<unknown>, next: HttpHandler) {
    const token = localStorage.getItem('token');

    const authReq = req.clone({
      headers: req.headers.set('Authorization', token || '')
    });

    return next.handle(authReq);
  }
}