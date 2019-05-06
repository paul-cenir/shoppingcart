import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/shared-module/services/cart.service';
import { Router } from '@angular/router';
import { JobService } from 'src/app/shared-module/services/job.service';

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.less']
})
export class PaymentComponent implements OnInit {
    @Input() cartTableData: any
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
                this.cartTableData = result['data'];
            });
    }

    checkout() {
        this.JobService.addJob(this.cartId)
            .subscribe(result => {
                this.Router.navigateByUrl('/job-order');
            });
    }
    

}
