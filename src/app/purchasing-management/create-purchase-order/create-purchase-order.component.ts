import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-create-purchase-order',
  templateUrl: './create-purchase-order.component.html',
  styleUrls: ['./create-purchase-order.component.css'],
})
export class CreatePurchaseOrderComponent {
  displayedColumns: string[] = ['productName', 'unit', 'piece'];
  dataSource: MatTableDataSource<any>;
  constructor(private fb: FormBuilder) {
    let purchaseProducts = [
      {
        productName: 'ABC',
        unit: 5,
        quantity: 2,
      },
      {
        productName: 'ABC',
        unit: 6,
        quantity: 3,
      },
      {
        productName: 'ABC',
        unit: 7,
        quantity: 4,
      },
    ];
    this.dataSource = new MatTableDataSource(purchaseProducts);
  }
  createPurchaseOrderData: object = {};
  createPurchaseOrderForm = this.fb.group({
    branch: new FormControl(''),
    description: new FormControl(''),
    registrationDate: new FormControl(''),
    deliveryDate: new FormControl(''),
    deliveryType: new FormControl(''),
    shippingLocation: new FormControl(''),
    sendForApproval: new FormControl(''),
  });
  purchaseProductForm = this.fb.group({
    productName: new FormControl(''),
    unit: new FormControl(''),
    quantity: new FormControl(''),
  });
}