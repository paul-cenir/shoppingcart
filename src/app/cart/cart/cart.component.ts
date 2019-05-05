import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/shared-module/services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {
    @Input() cartTableData: any;
    constructor(private CartService: CartService, private ActivatedRoute: ActivatedRoute, ) { }
    ngOnInit() {
        this.getCart();
    }
    getCart(): void {
        const cartId = +this.CartService.getCartId();
        this.CartService.getCart(cartId)
            .subscribe(result => {
                this.cartTableData = result['data'];
            });
    }
}
