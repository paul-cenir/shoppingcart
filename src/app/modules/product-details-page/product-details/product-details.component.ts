import { ProductApiService } from './../../../shared-module/api-services/product/product-api.service';
import { Product } from './../../../shared-module/api-services/product/product';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit {
    product: Product;
    constructor(
        // tslint:disable-next-line:no-shadowed-variable
        private ProductApiService: ProductApiService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.getProduct();
    }

    getProduct(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.ProductApiService.getProduct(id)
            .subscribe(product => this.product = product);
    }

}
