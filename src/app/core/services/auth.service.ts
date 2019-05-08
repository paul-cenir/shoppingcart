import { Injectable } from '@angular/core';
import { of, BehaviorSubject } from 'rxjs';
import * as moment from 'moment';
const TOKEN = 'TOKEN';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public headerUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    public setAccessToken(token) {
        localStorage.setItem('ACCESS_TOKEN', token);
        return of(true);
    }

    public getAccessToken() {
        return localStorage.getItem('ACCESS_TOKEN');
    }

    public isLoggedIn() {
        const accessToken = localStorage.getItem('ACCESS_TOKEN');
        if (!accessToken) {
            return accessToken;
        }
        const data = this.parseAccessTokenData();
        if (!data) {
            return false;
        }
        return true;
    }

    public deleteAccessToken() {
        localStorage.removeItem('ACCESS_TOKEN');
        return of(true);
    }

    public isAccessTokenIsExpired(exp) {
        const currentTimestamp = moment().unix();
        return currentTimestamp >= +exp;
    }

    public parseAccessTokenData() {
        const accessToken = this.getAccessToken();
        if (!accessToken) {
            return false;
        }
        const accessTokenData = accessToken.split('.');
        if (!accessTokenData[1]) {
            return false;
        } else {
            const tokenDecoded = JSON.parse(window.atob(accessTokenData[1]));

            if (!tokenDecoded.data.customer_id) {
                return false;
            }

            if (this.isAccessTokenIsExpired(tokenDecoded.exp)) {
                this.deleteAccessToken();
                return false;
            }

            return tokenDecoded;
        }
    }
}
