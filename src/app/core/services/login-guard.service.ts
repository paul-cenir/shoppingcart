/**
 * Created by prince.g on 6/17/2017.
 */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { of, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class LoginGuardService implements CanActivate {
    constructor(private AuthService: AuthService, private Router: Router) {}

    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        let is_authenticated = this.AuthService.isAuthenticated();

        if (!is_authenticated) {
            // if user is not logged in
            // return true
            return of(true);
        }

        this.Router.navigate(['']);
        return of(false);
    }
}
