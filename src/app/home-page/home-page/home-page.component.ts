import { AuthService } from 'src/app/core/services/auth.service';

import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared-module/models/product';
import { ProductService } from '../../shared-module/services/product.service';
import { ConfigService } from 'src/app/shared-module/services/config.service';
@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {

    products: Product[];
    constructor(private ProductService: ProductService, private AuthService: AuthService, private ConfigService: ConfigService) { }

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
