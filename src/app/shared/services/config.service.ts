import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    priceFormat = '1.2-2';
    currencySign = '₱';
}
