import { Product } from '../product/product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})

export class ProductApiService {

    constructor(private http: HttpClient) {
    }

    /** GET heroes from the server */
    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(environment.apiUrl + 'product')
            .pipe(
                catchError(err => {
                    console.log('Handling error locally and rethrowing it...', err);
                    return throwError(err);
                })
            );
    }

    getProduct(id: number): Observable<Product> {
        return this.http.get<Product>(`${environment.apiUrl}product/${id}`) .pipe(
            catchError(err => {
                console.log('Handling error locally and rethrowing it...', err);
                return throwError(err);
            })
        );
    }

}
