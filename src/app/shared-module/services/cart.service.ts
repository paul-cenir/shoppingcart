import { Cart } from './../models/cart';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})

export class CartService {
    constructor(private http: HttpClient) {
    }
    addCart(Cart: Cart): Observable<Cart> {
        return this.http.post<Cart>(environment.apiUrl + 'cart', Cart);
    }

    getCart(id: number): Observable<Cart> {
        return this.http.get<Cart>(`${environment.apiUrl}cart/${id}`).pipe(
            catchError(err => {
                console.log('Handling error locally and rethrowing it...', err);
                return throwError(err);
            })
        );
    }

    public setCartId(cartId): void {
        localStorage.setItem('CART_ID', cartId);
    }

    public getCartId() {
        return localStorage.getItem('CART_ID');
    }
}
