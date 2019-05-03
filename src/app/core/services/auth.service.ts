import { User } from './../../shared-module/models/user';

import { Injectable } from '@angular/core';

const TOKEN = 'TOKEN';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    login(userinfo: User): void {
        // localStorage.setItem(TOKEN, token);
        localStorage.setItem('ACCESS_TOKEN', 'access_token');
    }

    isLoggedIn() {
        const accessToken = localStorage.getItem('ACCESS_TOKEN');

        if (!accessToken) {
            return accessToken;
        }
    }
    public logout() {
        localStorage.removeItem('ACCESS_TOKEN');
    }
}
