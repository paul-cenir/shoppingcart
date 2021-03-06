
/**
 * Created by prince.g on 6/17/2017.
 */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { of, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class LoginGuardService implements CanActivate {
    // tslint:disable-next-line:no-shadowed-variable
    constructor(private AuthService: AuthService, private Router: Router) { }

    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        const isAuthenticated = this.AuthService.isLoggedIn();
        if (!isAuthenticated) {
            // if user is not logged in
            // return true
            return of(true);
        }

        this.Router.navigate(['']);
        return of(false);
    }
}
