import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComplaintComponent } from './create-complaint/create-complaint.component';
import { ComplaintListComponent } from './complaint-list/complaint-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CreateComplaintComponent,
    ComplaintListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ComplaintManagementModule { }
