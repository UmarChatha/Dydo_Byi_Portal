import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseOrderListComponent } from './purchase-order-list/purchase-order-list.component';
import { CreatePurchaseOrderComponent } from './create-purchase-order/create-purchase-order.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PurchaseOrderListComponent,
    CreatePurchaseOrderComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PurchasingManagementModule { }
