import { ProductService } from '../../shared-module/services/product.service';
import { Product } from '../../shared-module/models/product';

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
        private ProductService: ProductService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.getProduct();
    }

    getProduct(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.ProductService.getProduct(id)
            .subscribe(product => this.product = product);
    }

}
