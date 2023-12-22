import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    OrderListComponent,
    CreateOrderComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class OrderManagementModule { }
