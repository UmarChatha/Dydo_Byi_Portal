import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-branch-working-hours',
  templateUrl: './branch-working-hours.component.html',
  styleUrls: ['./branch-working-hours.component.css']
})
export class BranchWorkingHoursComponent {

  constructor(private fb: FormBuilder) {}
  createBranchWorkingHoursData: object = {};
  createWorkingHoursForm = this.fb.group({
    workingStatus: new FormControl(''),
    branchWorkingStart: new FormControl(''),
    branchWorkingEnd: new FormControl(''),
    workingSunday: new FormControl(''),
    sundayWorkingStart: new FormControl(''),
    sundayWorkingEnd: new FormControl(''),
  });  

  createWorkingHoursSubmitFn(): void {
    if (this.createWorkingHoursForm.valid ) {
      this.createBranchWorkingHoursData = {
        ...this.createWorkingHoursForm.value,
      };
      this.createWorkingHoursForm.reset();
    }
  }

}
