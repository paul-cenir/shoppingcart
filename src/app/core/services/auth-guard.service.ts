import { of, Observable } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(/*private AuthService: AuthService*/) {}

    /**
     * Implemented from CanActivate interface. Checks whether a certain url can be accessed
     * by a user - checking used are via access_token validity
     *
     * @returns {boolean}
     */
    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {

        return of(false);//test only checking if working

        let is_authenticated = this.AuthService.isAuthenticated();
        // used to check if route is required login
        let require_login = typeof router.data['require_login'] != 'undefined' ? router.data['require_login'] : false;

        if (is_authenticated) {
            // if user is logged in
            // return true
            return of(true);
        }

        // user is not yet logged in,
        // process refresh token request
        let ref_token = this.AuthService.getRefreshToken();
        if (ref_token) {
            return this.AuthService.refreshAccessToken().pipe(
                mergeMap(res => {
                    let accessToken = res['access_token'];
                    let expiresIn = res['expires_in'];
                    this.AuthService.setAccessToken(accessToken, expiresIn);
                    this.AuthService.login_source.next(res);
                    return of(true);
                }),
                catchError(err => {
                    this.AuthService.clearCredentials();

                    if (require_login) {
                        // broadcast requireLogin for subscribers to execute
                        this.AuthService.requireLogin.next({
                            url: state.url
                        });

                        return of(false);
                    } else {
                        return of(true);
                    }
                })
            );
        }

        if (require_login) {
            this.AuthService.requireLogin.next({
                url: state.url
            });

            return of(false);
        } else {
            return of(true);
        }
    }
}
