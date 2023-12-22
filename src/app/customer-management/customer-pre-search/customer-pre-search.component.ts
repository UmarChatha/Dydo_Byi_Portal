import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomerManagementService } from 'src/app/services/customer-management.service';
@Component({
  selector: 'app-customer-pre-search',
  templateUrl: './customer-pre-search.component.html',
  styleUrls: ['./customer-pre-search.component.css']
})
export class CustomerPreSearchComponent {
  constructor(private fb: FormBuilder, private router:Router, private CustomerManagementService:CustomerManagementService){}
  searchCustomerNumberForm = this.fb.group({
    customerPhoneNumber: new FormControl('')
  })
  searchCustomerNumberSubmitFn():void{
    if (this.searchCustomerNumberForm.valid){
      this.CustomerManagementService.customerPreSearchNumberSet(this.searchCustomerNumberForm.value.customerPhoneNumber as string)
    }
    this.router.navigateByUrl('main/customer-management/create-customer')
  }
}