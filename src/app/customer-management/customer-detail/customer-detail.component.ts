import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent {

  displayedColumns1: string[] = ['phoneNumber', 'actions'];
  displayedColumns2: string[] = ['telephoneNumber', 'personalDataProtectionLaw', 'phone', 'sms', 'email', 'actions'];
  displayedColumns3: string[] = ['opening', 'closing', 'workOnSunday', 'sundayOpening', 'sundayClosing'];
  displayedColumns4: string[] = ['product', 'piece'];

  dataSource1!: MatTableDataSource<any>;
  dataSource2!: MatTableDataSource<any>;
  dataSource3: MatTableDataSource<any>;
  dataSource4: MatTableDataSource<any>;

  phoneNumberArray:any[]=[];
  telephoneNumberArray:any[]=[];
  customerDetailData: object = {};

  isPhoneDiv:boolean=true;
  isCommunicationPermissionsDiv:boolean=false;
  isBranchWorkingTimesDiv:boolean=false;
  isBranchStocksDiv:boolean=false;

  constructor(private fb: FormBuilder, private router:Router){
    let brancWorkingTime=[
      {
          opening:'3:00',
          closing:'2:00',
          workOnSunday:'Event',
          sundayOpening:'1:00',
          sundayClosing:'5:00'
      },
      {
        opening:'4:00',
        closing:'7:00',
        workOnSunday:'Event',
        sundayOpening:'1:00',
        sundayClosing:'5:00'
      }
    ]
    this.dataSource3 = new MatTableDataSource(brancWorkingTime);
    let branchStocks=[
      {
          product:'ABC',
          piece:'3'
      },
      {
        product:'DEF',
        piece:'10'
    }
    ]
    this.dataSource4 = new MatTableDataSource(branchStocks);
  }

  customerDetailForm = this.fb.group({
    customerName: new FormControl(''),
    preferenceReason: new FormControl(''),
    bottleDeposit: new FormControl(''),
    emptyBottleQuantity: new FormControl(''),
    registrationType: new FormControl(''),
    branch: new FormControl(''),
    customerType: new FormControl(''),
    mail: new FormControl(''),
    customerNote: new FormControl(''),
    generalOrderNote: new FormControl(''),
    recommendedByCustomer: new FormControl(''),
    deliveryPersonName: new FormControl(''),
    subscriberNumber: new FormControl('')
  })

  phoneForm = this.fb.group({
    phoneNumber: new FormControl(''),
  })

  phoneDivFn():void{
    this.isPhoneDiv=true;
    this.isCommunicationPermissionsDiv=false;
    this.isBranchWorkingTimesDiv=false;
    this.isBranchStocksDiv=false;
  }

  addPhoneNumber():void{
    const phoneNumber=this.phoneForm.value;
    if (phoneNumber) {
      this.phoneNumberArray.push(phoneNumber.phoneNumber);
    }
    this.dataSource1 = new MatTableDataSource(this.phoneNumberArray);
    this.phoneForm.get('phoneNumber')?.setValue('');
  }

  clearPhoneNumber(phone:string):void{
    this.phoneNumberArray=this.phoneNumberArray.filter(ph=>ph!==phone);
    this.dataSource1 = new MatTableDataSource(this.phoneNumberArray);
  }

  communicationPermissionsForm = this.fb.group({
    telephoneNumber: new FormControl(false),
    personalDataProtectionLaw: new FormControl(false),
    phone: new FormControl(false),
    sms: new FormControl(false),
    email: new FormControl(false)
  })

  communicationPermissionsDivFn():void{
    this.isPhoneDiv=false;
    this.isCommunicationPermissionsDiv=true;
    this.isBranchWorkingTimesDiv=false;
    this.isBranchStocksDiv=false;
  }

  addTelephoneNumber():void{
    const telephoneNumber=this.communicationPermissionsForm.value;
    if (telephoneNumber) {
      this.telephoneNumberArray.push(telephoneNumber);
    }
    this.dataSource2 = new MatTableDataSource(this.telephoneNumberArray);
  }

  clearTelephoneNumber(check: number):void{
    this.telephoneNumberArray=this.telephoneNumberArray.filter((_,ph)=>ph !==check);
    this.dataSource2 = new MatTableDataSource(this.telephoneNumberArray);
  }

  branchWorkingTimesDivFn():void{
    this.isPhoneDiv=false;
    this.isCommunicationPermissionsDiv=false;
    this.isBranchWorkingTimesDiv=true;
    this.isBranchStocksDiv=false;
  }

  branchStocksDivFn():void{
    this.isPhoneDiv=false;
    this.isCommunicationPermissionsDiv=false;
    this.isBranchWorkingTimesDiv=false;
    this.isBranchStocksDiv=true;
  }

  customerDetailSubmitFn():void{
    if (this.customerDetailForm.valid && this.communicationPermissionsForm.valid && this.phoneForm.valid) {
      this.customerDetailData={
        ...this.customerDetailForm.value,
        ...this.communicationPermissionsForm.value,
        ...this.phoneNumberArray,
        ...this.telephoneNumberArray
      };
      // this.customerListData = {
      //   customerId: this.customerListForm.value.customerId as string,
      //   phone: this.customerListForm.value.phone as string,
      //   address: this.customerListForm.value.address as string,
      //   subscriberNumber: this.customerListForm.value.subscriberNumber as string,
      //   customerName: this.customerListForm.value.customerName as string,
      //   createdBy: this.customerListForm.value.createdBy as string,
      //   deliveryPersonName: this.customerListForm.value.deliveryPersonName as string,
      // }
      this.customerDetailForm.reset();
    }
  }

  goBackFn():void{
    this.router.navigate(['main/customer-management/customer-list'])
  }
  
}