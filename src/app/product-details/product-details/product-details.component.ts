import { Cart } from '../../shared/models/cart';
import { ConfigService } from '../../shared/services/config.service';
import { ProductService } from '../../shared/services/product.service';
import { Product } from '../../shared/models/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['../../../assets/less/modules/page-product-details/page-product-details.less'
        , '../../../assets/less/modules/page-product-details/page-product-details-mobile.less']
})

export class ProductDetailsComponent implements OnInit {
    product: Product;
    productQuantity = 1;
    price: number;
    cartForm: FormGroup;
    isSubmitted = false;
    soldOut: boolean;
    insufficientStock = false;
    constructor(
        // tslint:disable-next-line:no-shadowed-variable
        private ProductService: ProductService,
        private Router: Router,
        private ActivatedRoute: ActivatedRoute,
        private FormBuilder: FormBuilder,
        private ConfigService: ConfigService,
        private CartService: CartService
    ) { }

    ngOnInit() {
        this.getProduct();
    }

    getProduct(): void {
        const id = +this.ActivatedRoute.snapshot.paramMap.get('id');
        this.ProductService.getProduct(id)
            .subscribe(result => {
                this.product = result["data"];
                this.price = +this.computeTotalPrice();
                this.soldOut = this.product.stock_qty < 1;
                this.addValidation();
                },
                error => {
                    this.Router.navigateByUrl('/404');
                }
            );
    }

    addValidation() {
        this.cartForm = this.FormBuilder.group({
            qty: ['', [Validators.required]],
            product_id: +[this.product['product_id']],
            cart_id: +[this.CartService.getCartId()],
        });
    }

    get formControls() { return this.cartForm.controls; }

    public addCart(): void {
        this.isSubmitted = true;
        if (this.cartForm.invalid) {
            return;
        }
        const cart: Cart = this.cartForm.value;
        this.CartService.addCart(cart)
            .subscribe(
                result => {
                    if (result['cartId']) {
                        this.CartService.setCartId(result['cartId']);
                    }
                    this.Router.navigateByUrl('/cart');
                },
                error => {
                    if (error.error.validation_error_messages) {
                        this.insufficientStock = true;
                    }
                }
            );
    }

    changeQuantity() {
        if (this.productQuantity === 0) {
            this.productQuantity = 1;
        }
        this.price = +this.computeTotalPrice();
    }

    computeTotalPrice() {
        const total = this.productQuantity * this.product.price;
        return total.toFixed(2);
    }
}
