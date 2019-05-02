import { NgModule } from '@angular/core';

import { ProductDetailsPageRoutingModule } from './product-details-page-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SharedModule } from 'src/app/shared-module/shared-module.module';

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    ProductDetailsPageRoutingModule,
    SharedModule
  ]
})
export class ProductDetailsPageModule { }
