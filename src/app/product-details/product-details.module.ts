import { NgModule } from '@angular/core';

import { ProductDetailsRoutingModule } from './product-details-routing.module';

import { SharedModule } from 'src/app/shared-module/shared-module.module';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    ProductDetailsRoutingModule,
    SharedModule
  ]
})
export class ProductDetailsModule { }
