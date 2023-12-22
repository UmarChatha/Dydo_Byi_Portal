import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent {
  displayedColumns: string[] = [
    'orderNumber',
    'orderDate',
    'orderType',
    'customerName',
    'orderCreator',
    'orderBranch',
    'deliveryPerson',
    'productType',
    'freeItem',
    'escrowProduct',
    'depositTransaction',
    'paymentMethod',
    'orderAmount',
  ];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private fb: FormBuilder) {
    let orders = [
      {
        orderNumber: 1,
        orderDate: '12/12/22',
        orderType: 'One',
        customerName: 'Ali',
        orderCreator: 'Osama',
        orderBranch: 'A',
        deliveryPersonName: 'DEF',
        productType: 'A',
        freeItem: 'true',
        escrowProduct: 'true',
        depositTransaction: 'false',
        paymentMethod: 'B',
        orderAmount: 100,
      },
      {
        orderNumber: 2,
        orderDate: '10/12/22',
        orderType: 'One',
        customerName: 'Ali',
        orderCreator: 'Osama',
        orderBranch: 'A',
        deliveryPersonName: 'DEF',
        productType: 'A',
        freeItem: 'true',
        escrowProduct: 'true',
        depositTransaction: 'false',
        paymentMethod: 'B',
        orderAmount: 100,
      },
      {
        orderNumber: 3,
        orderDate: '12/12/22',
        orderType: 'One',
        customerName: 'Ali',
        orderCreator: 'Osama',
        orderBranch: 'A',
        deliveryPersonName: 'DEF',
        productType: 'A',
        freeItem: 'true',
        escrowProduct: 'true',
        depositTransaction: 'false',
        paymentMethod: 'B',
        orderAmount: 100,
      },
    ];
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(orders);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ordererListData: object = {};
  orderListForm = this.fb.group({
    orderName: new FormControl(''),
    orderType: new FormControl(''),
    orderCreator: new FormControl(''),
    orderBranch: new FormControl(''),
    orderDeliveryPerson: new FormControl(''),
    productType: new FormControl(''),
    freeItem: new FormControl(''),
    escrowProduct: new FormControl(''),
    deposiTransaction: new FormControl(''),
    paymentMethod: new FormControl(''),
    orderAmount: new FormControl(''),
    orderDate: new FormControl(''),
    orderDatePicker: new FormControl(''),
    customerName: new FormControl(''),
    orderAddress: new FormControl(''),
    generalOrderNote: new FormControl(''),
  });
}
