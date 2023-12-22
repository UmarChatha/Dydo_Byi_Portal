import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-delivery-person-list',
  templateUrl: './delivery-person-list.component.html',
  styleUrls: ['./delivery-person-list.component.css']
})
export class DeliveryPersonListComponent {

  displayedColumns: string[] = ['deliveryPersonCode', 'deliveryPersonName', 'deliveryPersonBranch'];
  dataSource: MatTableDataSource<any>;

  constructor(private fb: FormBuilder) {

    let deliveryPersons = [
      {
        deliveryPersonCode:1,
        deliveryPersonBranch:'One',
        deliveryPersonName:'Ali',
  
      },
      {
        deliveryPersonCode:1,
        deliveryPersonBranch:'One',
        deliveryPersonName:'Ali',
  
      },
      {
        deliveryPersonCode:1,
        deliveryPersonBranch:'One',
        deliveryPersonName:'Ali',
  
      },
    ]
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(deliveryPersons);

  }
  deliveryPersonListData: object = {};
  deliveryPersonListForm = this.fb.group({
    deliveryPersonCode: new FormControl(''),
    deliveryPersonName: new FormControl(''),
    deliveryPersonBranch: new FormControl(''),

  });  

}
