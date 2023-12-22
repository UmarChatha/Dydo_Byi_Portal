import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-holiday-time',
  templateUrl: './create-holiday-time.component.html',
  styleUrls: ['./create-holiday-time.component.css']
})
export class CreateHolidayTimeComponent {
  constructor(private fb: FormBuilder) {}
  createBranchHolidayData: object = {};
  createBranchHolidayForm = this.fb.group({
    startHolidayDate: new FormControl(''),
    endHolidayDate: new FormControl(''),
    holidayDate: new FormControl('')
  });
  createBranchHolidayFn(): void {
    if (this.createBranchHolidayForm.valid ) {
      this.createBranchHolidayData = {
        ...this.createBranchHolidayForm.value,
      };
      this.createBranchHolidayForm.reset();
    }
  }
}