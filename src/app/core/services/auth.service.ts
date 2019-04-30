
import { Injectable } from '@angular/core';

const TOKEN = 'TOKEN';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    setToken(token: string): void {
        localStorage.setItem(TOKEN, token);
    }

    isLogged() {
        const accessToken = localStorage.getItem('token');

        if (!accessToken) {
            return true;
        }
    }
}
