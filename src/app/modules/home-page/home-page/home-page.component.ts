
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared-module/api-services/product/product';
import { ProductApiService } from '../../../shared-module/api-services/product/product-api.service';
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
