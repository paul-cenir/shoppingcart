
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { of, Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable()
export class AuthGuardService implements CanActivate {

    // tslint:disable-next-line:no-shadowed-variable
    constructor(private AuthService: AuthService, private Router: Router) { }

    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        const isAuthenticated = this.AuthService.isLogged();
        if (isAuthenticated) {
            return of(true);
        }

        this.Router.navigate(['']);
        return of(false);
    }
}
