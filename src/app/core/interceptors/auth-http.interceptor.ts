// import {HttpInterceptor} from "@angular/common/http";
// import {Injectable} from '@angular/core';
// import {AuthService} from "@dri/auth/services/auth.service";
// import {ConfigManagerService} from "@dri/common/services/config-manager.service";
// import {UrlService} from "@dri/common/services/url.service";
// import {Observable, throwError} from "rxjs";
// import {HttpEvent} from "@angular/common/http";
// import {HttpHandler} from "@angular/common/http";
// import {HttpRequest} from "@angular/common/http";
// import {HttpResponse} from "@angular/common/http";
// import {HttpErrorResponse} from "@angular/common/http";
// import {map, catchError, mergeMap} from "rxjs/operators";
// import {Router} from "@angular/router";

// @Injectable()
// export class AuthHttpInterceptor implements HttpInterceptor {

//     constructor(private AuthService: AuthService, private ConfigManagerService: ConfigManagerService,
//                 private UrlService: UrlService, private Router: Router) {
//     }

//     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

//         // if not authenticated and there is a refresh token,
//         // try to refresh token first then perform the request
//         const refToken = this.AuthService.getRefreshToken();
//         if (!this.AuthService.isAuthenticated() && refToken) {
//             return this.AuthService.refreshAccessToken().pipe(
//                 mergeMap((res: any) => {
//                     // save access token
//                     this.AuthService.setAccessToken(
//                         res.access_token,
//                         res.expires_in
//                     );

//                     // append Authorization Header
//                     let req = this.appendAuthHeaders(request);

//                     // execute request
//                     return next.handle(req);
//                 }),
//                 catchError((error: any) => {
//                     // continue executing request
//                     return next.handle(request);
//                 })
//             );
//         }

//         // if still authenticated, continue
//         request = this.appendAuthHeaders(request);
//         return next
//             .handle(request).pipe(
//                 map((event: HttpEvent<any>) => {
//                     if (event instanceof HttpResponse) {
//                         return event;
//                     }
//                 }),
//                 catchError((error: any) => {
//                     // if server responds 401 or 403 status, try to refresh token
//                     if (error instanceof HttpErrorResponse && (error.status === 401 || error.status === 403)) {
//                         if (refToken) {
//                             return this.AuthService.refreshAccessToken().pipe(
//                                 mergeMap((res: any) => {
//                                     this.AuthService.setAccessToken(
//                                         res.access_token,
//                                         res.expires_in
//                                     );
//                                     let req = this.appendAuthHeaders(request);
//                                     return next.handle(req);
//                                 }),
//                                 catchError((error: any) => {
//                                     if (error.status === 401) {
//                                         this.requireLogin();
//                                     }
//                                     return throwError(error);
//                                 })
//                             );
//                         }

//                         if (error.status === 401) {
//                             this.requireLogin();
//                         }
//                     }
                        
//                     return throwError(error);
//                 })
//             );

//     }

//     private requireLogin() {
//         const state = this.Router.routerState.snapshot;

//         if (!state.url.match(/\/customer\/login/g)) {
//             this.AuthService.clearCredentials();
//             this.AuthService.requireLogin.next({
//                 url: state.url
//             });
//         }
//     }

//     private appendAuthHeaders(request) {
//         if (this.AuthService.getAccessToken()) {
//             let req = request.clone({
//                 setHeaders: {
//                     Authorization: `Bearer ${this.AuthService.getAccessToken()}`
//                 }
//             });
//             return req;
//         }

//         return request;
//     }
// }
