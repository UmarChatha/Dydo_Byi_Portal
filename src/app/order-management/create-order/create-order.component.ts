import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css'],
})
export class CreateOrderComponent {
  displayedColumns: string[] = [
    'otherProductName',
    'unit',
    'quantity',
    'freeItem',
    'freeReason',
  ];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  count1 = 0;
  count2 = 0;
  count3 = 0;
  count4 = 0;

  isMainProductDiv: boolean = true;
  isOtherProductDiv: boolean = false;
  mainProductsDivFn(): void {
    this.isMainProductDiv = true;
    this.isOtherProductDiv = false;
  }
  otherProductsDivFn(): void {
    this.isOtherProductDiv = true;
    this.isMainProductDiv = false;
  }
  constructor(private fb: FormBuilder) {
    let otherProducts = [
      {
        otherProductName: 'ABC',
        unit: 5,
        quantity: 2,
        freeItem: true,
        freeReason: 'ABCDEF',
      },
      {
        otherProductName: 'CBA',
        unit: 45,
        quantity: 6,
        freeItem: true,
        freeReason: 'ABCDEF',
      },
      {
        otherProductName: 'DEF',
        unit: 3,
        quantity: 8,
        freeItem: false,
        freeReason: 'ABCDEF',
      },
    ];
    this.dataSource = new MatTableDataSource(otherProducts);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  createOrderData: object = {};
  createOrderForm = this.fb.group({
    orderName: new FormControl(''),
    orderType: new FormControl(''),
    orderCreator: new FormControl(''),
    orderBranch: new FormControl(''),
    orderDeliveryPerson: new FormControl(''),
    paymentType: new FormControl(''),
    escrowProduct: new FormControl(''),
    despositProcess: new FormControl(''),
    customerBalance: new FormControl(''),
    orderDate: new FormControl(''),
    orderDatePicker: new FormControl(''),
    customerName: new FormControl(''),
    orderAddress: new FormControl(''),
    generalOrderNote: new FormControl(''),
  });
  mainProductForm = this.fb.group({
    mainProductOneQuantity: new FormControl(0),
    mainProductOneStocks: new FormControl(''),
    mainProductOnePrize: new FormControl(''),
    mainProductOnefreeItem: new FormControl(''),
    mainProductTwoQuantity: new FormControl(0),
    mainProductTwoStocks: new FormControl(''),
    mainProductTwoPrize: new FormControl(''),
    mainProductTwofreeItem: new FormControl(''),
    mainProductThreeQuantity: new FormControl(0),
    mainProductThreeStocks: new FormControl(''),
    mainProductThreePrize: new FormControl(''),
    mainProductThreefreeItem: new FormControl(''),
    mainProductFourQuantity: new FormControl(0),
    mainProductFourStocks: new FormControl(''),
    mainProductFourPrize: new FormControl(''),
    mainProductFourfreeItem: new FormControl(''),
  });
  otherProductForm = this.fb.group({
    otherProductName: new FormControl(''),
    otherProductQuantity: new FormControl(''),
    otherProductfreeItem: new FormControl(''),
  });
  increaseQuantity(productName: string) {
    if (productName == 'mainProductOneQuantity') {
      this.count1++;
      this.mainProductForm.value.mainProductOneQuantity = this.count1;
    } else if (productName == 'mainProductTwoQuantity') {
      this.count2++;
      this.mainProductForm.value.mainProductTwoQuantity = this.count2;
    } else if (productName == 'mainProductThreeQuantity') {
      this.count3++;
      this.mainProductForm.value.mainProductThreeQuantity = this.count3;
    } else if (productName == 'mainProductFourQuantity') {
      this.count4++;
      this.mainProductForm.value.mainProductFourQuantity = this.count4;
    }
  }
  decreaseQuantity(productName: string) {
    if (productName == 'mainProductOneQuantity') {
      this.count1--;
      this.mainProductForm.value.mainProductOneQuantity = this.count1;
    } else if (productName == 'mainProductTwoQuantity') {
      this.count2--;
      this.mainProductForm.value.mainProductTwoQuantity = this.count2;
    } else if (productName == 'mainProductThreeQuantity') {
      this.count3--;
      this.mainProductForm.value.mainProductThreeQuantity = this.count3;
    } else if (productName == 'mainProductFourQuantity') {
      this.count4--;
      this.mainProductForm.value.mainProductFourQuantity = this.count4;
    }
  }
  createOrderSubmitFn(): void {
    if (
      this.createOrderForm.valid &&
      this.mainProductForm.valid &&
      this.otherProductForm.valid
    ) {
      this.createOrderData = {
        ...this.createOrderForm.value,
        ...this.mainProductForm.value,
        ...this.otherProductForm.value,
      };
      this.createOrderForm.reset();
    }
  }


}
