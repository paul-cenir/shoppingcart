import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class ShipmentService {

    constructor(private HttpClient: HttpClient) { }

    getShipmentRate(id: number): Observable<any> {
        return this.HttpClient.get<any>(`${environment.apiUrl}shipment/${id}`);
    }

    addShipment(shipment:any): Observable<any> {
        return this.HttpClient.post<any>(environment.apiUrl + 'shipment', shipment);
    }
}
