import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const BaseUrl = 'https://dummyjson.com/';
    const token=localStorage.getItem('token');
    let NewRequest = request.clone({
      url: BaseUrl + request.url,
      setHeaders: {
        'Authorization': `Bearer ${token}`,
      },
    });

    return next.handle(NewRequest);
  }
}
