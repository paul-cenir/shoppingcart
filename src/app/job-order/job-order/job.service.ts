import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class JobService {

    constructor(private HttpClient: HttpClient) {
    }

    addJob(Job: any): Observable<any> {
        return this.HttpClient.post<any>(environment.apiUrl + 'job', Job);
    }

    getJob(id: number): Observable<any> {
        return this.HttpClient.get<any>(`${environment.apiUrl}job/${id}`).pipe(
            catchError(err => {
                console.log('Handling error locally and rethrowing it...', err);
                return throwError(err);
            })
        );
    }
}
