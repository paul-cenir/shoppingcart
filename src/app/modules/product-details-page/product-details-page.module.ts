import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsPageRoutingModule } from './product-details-page-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [
    CommonModule,
    ProductDetailsPageRoutingModule
  ]
})
export class ProductDetailsPageModule { }
