import { Component,ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-purchase-order-list',
  templateUrl: './purchase-order-list.component.html',
  styleUrls: ['./purchase-order-list.component.css']
})

export class PurchaseOrderListComponent {
  displayedColumns: string[] = ['branch', 'status', 'registrationDate', 'deliveryDate'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private fb: FormBuilder) {

    let purchaseOrders = [
      {
        branch:'ABC',
        status:'Pending',
        registrationDate:'12/02/2023',
        deliveryDate:'22/02/2023'
      
      },
      {
        branch:'DEF',
        status:'Complete',
        registrationDate:'9/02/2023',
        deliveryDate:'13/02/2023',
      
      },
    ]
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(purchaseOrders);
   }

   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  purchaseOrderListData: object = {};

  purchaseOrderListForm = this.fb.group({
    branch: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    registrationDate: new FormControl('', [Validators.required]),
    deliveryDate: new FormControl('', [Validators.required]),
  })
  purchaseOrderListSubmitFn(): void {
    if (this.purchaseOrderListForm.valid) {
      this.purchaseOrderListData = {
        branch: this.purchaseOrderListForm.value.branch as string,
        status: this.purchaseOrderListForm.value.status as string,
        registrationDate: this.purchaseOrderListForm.value.registrationDate as string,
        deliveryDate: this.purchaseOrderListForm.value.deliveryDate as string,
      }
      this.purchaseOrderListForm.reset();
      console.log(this.purchaseOrderListData)
    }
  }

}
