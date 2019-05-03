import { AuthService } from 'src/app/core/services/auth.service';

import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared-module/models/product';
import { ProductService } from '../../shared-module/services/product.service';
@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {

    products: Product[];
    constructor(private ProductService: ProductService, private AuthService: AuthService) { }

    ngOnInit() {
        this.getProducts();
    }

    getProducts(): void {
        this.ProductService.getProducts()
            .subscribe(products => this.products = products);
    }

    // test(): void  {
    //   this.ProductService.
    //   .subscribe(heroes => this.heroes = heroes);
    // }
}
