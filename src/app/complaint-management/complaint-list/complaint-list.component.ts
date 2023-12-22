import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-complaint-list',
  templateUrl: './complaint-list.component.html',
  styleUrls: ['./complaint-list.component.css']
})
export class ComplaintListComponent {

  displayedColumns: string[] = ['complaintNumber', 'complaintDate', 'branch', 'customerName','branchManager',
  'regionalManager', 'complaintStatus','complaintUpperGroup','complaintType','complaintCreator'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private fb: FormBuilder) {
    
    let complaints = [
      {
        complaintNumber:1,
        branch:'None',
        branchManager:'Ali',
        complaintStatus:'Pending',
        complaintCreator:'Osama',
        complaintDate:'A',
        customerName:'DEF',
        regionalManager:'A',
        complaintUpperGroup:'true',
        complaintType:'true'
      },
      {
        complaintNumber:2,
        branch:'None',
        branchManager:'Ali',
        complaintStatus:'Pending',
        complaintCreator:'Osama',
        complaintDate:'A',
        customerName:'DEF',
        regionalManager:'A',
        complaintUpperGroup:'true',
        complaintType:'true'
      },
      {
        complaintNumber:3,
        branch:'None',
        branchManager:'Ali',
        complaintStatus:'Pending',
        complaintCreator:'Osama',
        complaintDate:'A',
        customerName:'DEF',
        regionalManager:'A',
        complaintUpperGroup:'true',
        complaintType:'true'
      },
    ]
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(complaints);
   }




  ComplaintListData: object = {};
  complaintListForm = this.fb.group({
    complaintNumber: new FormControl(''),
    branch: new FormControl(''),
    branchManager: new FormControl(''),
    complaintStatus: new FormControl(''),
    complaintCreator: new FormControl(''),
    complaintDate: new FormControl(''),
    customerName: new FormControl(''),
    regionalManager: new FormControl(''),
    complaintUperGroup: new FormControl(''),
    complaintType: new FormControl(''),
  })

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}

