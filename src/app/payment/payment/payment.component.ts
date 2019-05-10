import { JobService } from 'src/app/job-order/job-order/job.service';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['../../../assets/css_min/flow-checkout/flow-checkout.min.css'
        , '../../../assets/css_min/flow-checkout/flow-checkout-mobile.min.css'],
    encapsulation: ViewEncapsulation.None
})

export class PaymentComponent implements OnInit {
    @Input() cartTableData: any;
    cartId = +this.CartService.getCartId();
    constructor(
        private CartService: CartService,
        private Router: Router,
        private JobService: JobService
    ) { }

    ngOnInit() {
        this.getCart();
    }

    getCart(): void {
        this.CartService.getCart(this.cartId)
            .subscribe(result => {
                this.cartTableData = [];
                this.cartTableData['bodyData'] = result['data']['cartItemData'];
                this.cartTableData['footerData'] = result['data']['cartData'];
                this.cartTableData['footerData']['buttonText'] = 'Checkout';
            });
    }

    checkout() {
        this.JobService.addJob(this.cartId)
            .subscribe(result => {
                this.CartService.deleteCartId();
                this.Router.navigateByUrl('/job-order/' + result);
            });
    }
}
