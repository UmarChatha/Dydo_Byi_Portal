import { Component,ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent {
  displayedColumns: string[] = ['customerId', 'phone', 'address', 'subscriberNumber', 'customerName', 'createdBy', 'deliveryPersonName', 'createNewOrder'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private fb: FormBuilder, private router:Router) {
    let customers = [
      {
        customerId:1,
        phone:'0123456789',
        address:'Pakistan',
        subscriberNumber:'112',
        customerName:'Osama',
        createdBy:'ABC',
        deliveryPersonName:'DEF',
        createNewOrder:'New Order'
      },
      {
        customerId:2,
        phone:'0123456789',
        address:'Turkey',
        subscriberNumber:'123212',
        customerName:'Maarouf',
        createdBy:'DEF',
        deliveryPersonName:'GHI',
        createNewOrder:'New Order'
      },
    ]
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(customers);
   }
   ngOnInit(){}
   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
  customerNewOrderFn(customerId:number):void{
    console.log(customerId)
  }
  customerDetailFn(customerId:number):void{
    this.router.navigate(['main/customer-management/customer-detail'])
  }
  customerListData: object = {};
  customerListForm = this.fb.group({
    customerId: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    subscriberNumber: new FormControl(''),
    customerName: new FormControl(''),
    createdBy: new FormControl(''),
    deliveryPersonName: new FormControl(''),
  })
  customerListSubmitFn(): void {
    if (this.customerListForm.valid) {
      this.customerListData=this.customerListForm.value;
      // this.customerListData = {
      //   customerId: this.customerListForm.value.customerId as string,
      //   phone: this.customerListForm.value.phone as string,
      //   address: this.customerListForm.value.address as string,
      //   subscriberNumber: this.customerListForm.value.subscriberNumber as string,
      //   customerName: this.customerListForm.value.customerName as string,
      //   createdBy: this.customerListForm.value.createdBy as string,
      //   deliveryPersonName: this.customerListForm.value.deliveryPersonName as string,
      // }
      this.customerListForm.reset();
      console.log(this.customerListData)
    }
  }
}