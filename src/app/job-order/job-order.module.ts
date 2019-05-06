import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobOrderRoutingModule } from './job-order-routing.module';
import { JobOrderComponent } from './job-order/job-order.component';

@NgModule({
  declarations: [JobOrderComponent],
  imports: [
    CommonModule,
    JobOrderRoutingModule
  ]
})
export class JobOrderModule { }
