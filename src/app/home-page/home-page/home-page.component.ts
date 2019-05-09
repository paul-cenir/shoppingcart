import { AuthService } from 'src/app/core/services/auth.service';

import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { ProductService } from '../../shared/services/product.service';
import { ConfigService } from 'src/app/shared/services/config.service';
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
}
