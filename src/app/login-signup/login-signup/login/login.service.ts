import { HttpErrorHandler, HandleError } from './../../../shared-module/services/http-error-handler.service';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { User } from './../../../shared-module/models/user';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private handleError: HandleError;
    constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('login');
    }

    login(user: User): Observable<User> {
        return this.http.post<User>(environment.apiUrl + 'login', user);
    }
}
