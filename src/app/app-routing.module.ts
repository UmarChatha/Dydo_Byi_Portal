import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './layout/main/main.component';

import { CustomerPreSearchComponent } from './customer-management/customer-pre-search/customer-pre-search.component';
import { CustomerListComponent } from './customer-management/customer-list/customer-list.component';

import { CreateOrderComponent } from './order-management/create-order/create-order.component';
import { OrderListComponent } from './order-management/order-list/order-list.component';

import { CreateComplaintComponent } from './complaint-management/create-complaint/create-complaint.component';
import { ComplaintListComponent } from './complaint-management/complaint-list/complaint-list.component';

import { CreatePurchaseOrderComponent } from './purchasing-management/create-purchase-order/create-purchase-order.component';
import { PurchaseOrderListComponent } from './purchasing-management/purchase-order-list/purchase-order-list.component';

import { CreateHolidayTimeComponent } from './working-time-management/create-holiday-time/create-holiday-time.component';
import { HolidayTimeListComponent } from './working-time-management/holiday-time-list/holiday-time-list.component';
import { CreateCustomerComponent } from './customer-management/create-customer/create-customer.component';
import { BranchWorkingHoursComponent } from './working-time-management/branch-working-hours/branch-working-hours.component';
import { CreateDeliveryPersonComponent } from './delivery-person-management/create-delivery-person/create-delivery-person.component';
import { DeliveryPersonListComponent } from './delivery-person-management/delivery-person-list/delivery-person-list.component';
import { CustomerDetailComponent } from './customer-management/customer-detail/customer-detail.component';
import { ProductPriceListComponent } from './product-management/product-price-list/product-price-list.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'customer-management/customer-pre-search',
        component: CustomerPreSearchComponent
      },
      {
        path: 'customer-management/customer-list',
        component: CustomerListComponent
      },
      {
        path: 'customer-management/create-customer',
        component: CreateCustomerComponent
      },
      {
        path: 'customer-management/customer-detail',
        component: CustomerDetailComponent
      },

      {
        path: 'order-management/create-order',
        component: CreateOrderComponent
      },
      {
        path: 'order-management/order-list',
        component: OrderListComponent
      },

      {
        path: 'complaint-management/create-complaint',
        component: CreateComplaintComponent
      },
      {
        path: 'complaint-management/complaint-list',
        component: ComplaintListComponent
      },

      {
        path: 'purchasing-management/create-purchase-order',
        component: CreatePurchaseOrderComponent
      },
      {
        path: 'purchasing-management/purchase-order-list',
        component: PurchaseOrderListComponent
      },

      {
        path: 'working-time-management/create-holiday-time',
        component: CreateHolidayTimeComponent
      },
      {
        path: 'working-time-management/holiday-time-list',
        component: HolidayTimeListComponent
      },
      {
        path: 'working-time-management/branch-working-hours',
        component: BranchWorkingHoursComponent
      },

      {
        path: 'delivery-person-management/create-delivery-person',
        component: CreateDeliveryPersonComponent
      },
      {
        path: 'delivery-person-management/delivery-person-list',
        component: DeliveryPersonListComponent
      },

      {
        path: 'product-management/product-price-list',
        component: ProductPriceListComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
