import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateHolidayTimeComponent } from './create-holiday-time/create-holiday-time.component';
import { HolidayTimeListComponent } from './holiday-time-list/holiday-time-list.component';
import { SharedModule } from '../shared/shared.module';
import { BranchWorkingHoursComponent } from './branch-working-hours/branch-working-hours.component';

@NgModule({
  declarations: [
    CreateHolidayTimeComponent,
    HolidayTimeListComponent,
    BranchWorkingHoursComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class WorkingTimeManagementModule { }
