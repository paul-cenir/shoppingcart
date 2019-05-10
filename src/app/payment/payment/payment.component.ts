import { JobService } from 'src/app/job-order/job-order/job.service';
import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['../../../assets/less/modules/flow-payment/flow-payment.less'
        , '../../../assets/less/modules/flow-payment/flow-payment-mobile.less']
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
