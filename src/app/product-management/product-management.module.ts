import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPriceListComponent } from './product-price-list/product-price-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductPriceListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProductManagementModule { }
