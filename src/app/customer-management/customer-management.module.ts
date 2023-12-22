import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerPreSearchComponent } from './customer-pre-search/customer-pre-search.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SharedModule } from '../shared/shared.module';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

@NgModule({
  declarations: [
    CustomerPreSearchComponent,
    CustomerListComponent,
    CreateCustomerComponent,
    CustomerDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CustomerManagementModule { }
