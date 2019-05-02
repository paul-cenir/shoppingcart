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
        // Get the auth token from the service.
        const authToken = this.auth.isLogged();
     
        /*
        * The verbose way:
        // Clone the request and replace the original headers with
        // cloned headers, updated with the authorization.
        const authReq = req.clone({
          headers: req.headers.set('Authorization', authToken)
        });
        */
        // Clone the request and set the new header in one step.
        console.log(authToken);
        var token: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJleGFtcGxlLm9yZyIsImF1ZCI6ImV4YW1wbGUuY29tIiwiaWF0IjoxNTU2NzY0NTg2LCJuYmYiOjE1NTY3NjQ1ODYsImV4cCI6MTU1Njc2ODE4NiwiZGF0YSI6eyJjdXN0b21lcl9pZCI6IjQiLCJmaXJzdF9uYW1lIjoiUGF1bCBDZW5pciIsImxhc3RfbmFtZSI6IkNlbmlyIn19.mnXiOZxkG7xDDacHnjBxcJZbc_NsOJRDXquWv6lEN-yX9GLfIEe5re6LkMshv_4LQcNiEh6WytuDWhrgxEm_f1XPn6Os1kPI472LGT41V4Xkm_Q0l52B4sNraDh_bv3zXkLORJLBkd1htenIs_ROCicLI0-i3-O1FuwMUHls8Ww';
        const authReq = req.clone({ setHeaders: { Authorization: 'Bearer ' + token} });
        // send cloned request with header to the next handler.
        return next.handle(authReq);
    }
}




/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/