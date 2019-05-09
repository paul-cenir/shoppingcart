import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment/payment.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [PaymentComponent],
    imports: [
        CommonModule,
        PaymentRoutingModule,
        SharedModule,
        FormsModule
    ]
})
export class PaymentModule { }
