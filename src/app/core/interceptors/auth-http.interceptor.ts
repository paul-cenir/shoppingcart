import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { AuthService } from '../services/auth.service';

import { Observable, of, throwError } from 'rxjs';
@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken = this.auth.isLoggedIn();
        if (this.auth.getAccessToken()) {
            const authReq = req.clone({ setHeaders: { Authorization: 'Bearer ' + this.auth.getAccessToken() } });
            return next.handle(authReq);
        } else {
            return next.handle(req);
        }

    }
}
