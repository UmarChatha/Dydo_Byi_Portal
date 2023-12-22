import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-holiday-time-list',
  templateUrl: './holiday-time-list.component.html',
  styleUrls: ['./holiday-time-list.component.css']
})
export class HolidayTimeListComponent {

  displayedColumns: string[] = ['startHolidayDate', 'endHolidayDate'];
  dataSource: MatTableDataSource<any>;
 

  constructor(private fb: FormBuilder) {
    
    let holidays = [
      {
        startHolidayDate: '10/12/22',
        endHolidayDate:'12/12/22',
       
      },
      {
        startHolidayDate:'12/11/22',
        endHolidayDate:'15/11/22',
      },
    
    ]
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(holidays);
   }


  HolidayTimeListData: object = {};
  holidayTimeListForm = this.fb.group({
    startHolidayDate: new FormControl(''),
    endHolidayDate: new FormControl(''),

  })
}
