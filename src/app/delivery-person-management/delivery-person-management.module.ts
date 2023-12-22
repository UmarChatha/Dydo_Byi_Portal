import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateDeliveryPersonComponent } from './create-delivery-person/create-delivery-person.component';
import { DeliveryPersonListComponent } from './delivery-person-list/delivery-person-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CreateDeliveryPersonComponent,
    DeliveryPersonListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DeliveryPersonManagementModule { }
