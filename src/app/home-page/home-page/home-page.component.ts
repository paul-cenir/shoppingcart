
import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared-module/models/product';
import { ProductApiService } from '../../shared-module/services/product-api.service';
@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {

    products: Product[];
    constructor(private productApiService: ProductApiService) { }

    ngOnInit() {
        this.getProducts();
        // tslint:disable-next-line:max-line-length
        var token: string = 'eyJpc3MiOiJleGFtcGxlLm9yZyIsImF1ZCI6ImV4YW1wbGUuY29tIiwiaWF0IjoxNTU2NzY0NTg2LCJuYmYiOjE1NTY3NjQ1ODYsImV4cCI6MTU1Njc2ODE4NiwiZGF0YSI6eyJjdXN0b21lcl9pZCI6IjQiLCJmaXJzdF9uYW1lIjoiUGF1bCBDZW5pciIsImxhc3RfbmFtZSI6IkNlbmlyIn19';
        console.log(window.atob(token));
    }

    getProducts(): void {
        this.productApiService.getProducts()
            .subscribe(products => this.products = products);
    }

    // test(): void  {
    //   this.productApiService.
    //   .subscribe(heroes => this.heroes = heroes);
    // }
}
