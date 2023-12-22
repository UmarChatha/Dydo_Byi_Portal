import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerManagementService } from 'src/app/services/customer-management.service';
@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css'],
})
export class CreateCustomerComponent {
  phoneNumberdisplayedColumns: string[] = [
    'phoneNumber',
    'personalDataProtectionLaw',
    'phone',
    'sms',
    'email',
    'actions',
  ];
  addressdisplayedColumns: string[] = [
    'province',
    'district',
    'neighborhood',
    'street',
    'islandName',
    'siteName',
    'blockName',
    'blockNumber',
    'floorNumber',
    'flatNumber',
    'additionalAddressInformation',
    'addressNotFound',
    'actions',
  ];
  dataSource1!: MatTableDataSource<any>;
  dataSource2!: MatTableDataSource<any>;
  createCustomerData: any = {};
  phoneNumberArray: any[] = [];
  addressArray: any[] = [];
  isAddressDiv: boolean = true;
  isPhoneDiv: boolean = false;

  provinces: any = [];
  districts: any = [];
  neighborhoods: any = [];


  constructor(
    private fb: FormBuilder,
    private customerManagementService: CustomerManagementService
  ) {}
  ngOnInit() {
    //this.phoneNumberArray.push(this.customerManagementService.customerPreSearchNumberGet())
    this.dataSource1 = new MatTableDataSource(this.phoneNumberArray);

    this.getProvinceFn();
  }
  createCustomerForm = this.fb.group({
    customerName: new FormControl(''),
    preferenceReason: new FormControl(''),
    cash: new FormControl(''),
    creditCard: new FormControl(''),
    otherPaymentTypes: new FormControl(''),
    bottleDeposit: new FormControl(''),
    mail: new FormControl(''),
    customerNote: new FormControl(''),
    generalOrderNote: new FormControl(''),
    recommendedByCustomer: new FormControl(''),
    emptyBottleQuantity: new FormControl(''),
  });
  addressForm = this.fb.group({
    province: new FormControl(''),
    district: new FormControl(''),
    neighborhood: new FormControl(''),
    street: new FormControl(''),
    islandName: new FormControl(''),
    siteName: new FormControl(''),
    blockName: new FormControl(''),
    blockNumber: new FormControl(''),
    floorNumber: new FormControl(''),
    flatNumber: new FormControl(''),
    additionalAddressInformation: new FormControl(''),
    addressNotFound: new FormControl(''),
  });
  addressDivFn(): void {
    this.isAddressDiv = true;
    this.isPhoneDiv = false;
  }
  phoneDivFn(): void {
    this.isPhoneDiv = true;
    this.isAddressDiv = false;
  }
  phoneForm = this.fb.group({
    phoneNumber: new FormControl(),
    personalDataProtectionLaw: new FormControl(false),
    phone: new FormControl(false),
    sms: new FormControl(false),
    email: new FormControl(false),
  });
  addPhoneNumber(): void {

    let phoneNumber: any = this.phoneForm.value;

    if (phoneNumber) {
      this.phoneNumberArray.push(phoneNumber);
    }
    this.dataSource1 = new MatTableDataSource(this.phoneNumberArray);
    this.phoneForm.get('phoneNumber')?.setValue('');
    this.phoneForm.get('personalDataProtectionLaw')?.setValue(false);
    this.phoneForm.get('phone')?.setValue(false);
    this.phoneForm.get('sms')?.setValue(false);
    this.phoneForm.get('email')?.setValue(false);
    console.log(this.phoneNumberArray);
  }

  clearPhoneNumber(phone: number): void {

    this.phoneNumberArray = this.phoneNumberArray.filter((_,ph) => ph !== phone);
    this.dataSource1 = new MatTableDataSource(this.phoneNumberArray);
  }

  createCustomerSubmitFn(): void {
    if (
      this.createCustomerForm.valid &&
      this.addressForm.valid &&
      this.phoneForm.valid
    ) {
      this.createCustomerData = {
        ...this.createCustomerForm.value,
        addressArray: [...this.addressArray],
        phoneNumberArray: [...this.phoneNumberArray],
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
      this.createCustomerForm.reset();
      this.addressForm.reset();
      this.phoneForm.reset();
      this.addressArray = [];
      this.phoneNumberArray = [];

      this.createCustomerData = {};
    }
  }

  addAddressFn() {
    let address: any = this.addressForm.value;
    // address.province = this.provinces.find((p: any) => p.IL_ID === parseInt(address.province)).ADI;
    // address.district = this.districts.find((d: any) => d.ILCE_ID === parseInt(address.district)).ADI;
    // address.neighborhood = this.neighborhoods.find((n: any) => n.ID === parseInt(address.neighborhood)).ADI;
    if (address) {
      this.addressArray.push(address);
    }

    this.dataSource2 = new MatTableDataSource(this.addressArray);
    this.addressForm.reset();
    this.districts = [];
    this.neighborhoods = [];
  }

  clearAddress(check: number): void {
    this.addressArray = this.addressArray.filter((_,ph) => ph !== check);
    this.dataSource2 = new MatTableDataSource(this.addressArray);
  }
  editAddress(check: any, i: number): void {
    this.populateAddressForm(check);
    this.getdata(check);
    this.addressArray = this.addressArray.filter((_,ph) => ph !== i);
    this.dataSource2 = new MatTableDataSource(this.addressArray);
  }
  getdata(address: any) {

    const selectedProvinceId = this.provinces.find((p: any) => p.ADI === address.province).IL_ID;

    if (selectedProvinceId) {

      this.customerManagementService.getDistrict(selectedProvinceId).subscribe({
        next: (result: any) =>
        {
          this.districts = result.results;
        },
        error: (error: any) =>
        {
          console.log(error);
        },
        complete: () => {

          const selectedDistrictId = this.districts.find((d: any) => d.ADI === address.district).ILCE_ID;

          if (selectedDistrictId)
          {
            this.customerManagementService.getNeighborhood(selectedDistrictId).subscribe({
                next: (result: any) => 
                {
                  this.neighborhoods = result.results;
                },
                error: (error: any) => 
                {
                  console.log(error);
                },
                complete: () => {},
              });
          }
        },
      });
    }
  }

  populateAddressForm(data: any) {
    const formData = {
      province: data.province,
      district: data.district,
      neighborhood: data.neighborhood,
      street: data.street,
      islandName: data.islandName,
      siteName: data.siteName,
      blockName: data.blockName,
      blockNumber: data.blockNumber,
      floorNumber: data.floorNumber,
      flatNumber: data.flatNumber,
      additionalAddressInformation: data.additionalAddressInformation,
      addressNotFound: data.addressNotFound,
    };

    this.addressForm.setValue(formData);
  }

  pdplCheckFn(arrayIndex: any) {
    let pdplToChange = this.phoneNumberArray[arrayIndex];
    pdplToChange.personalDataProtectionLaw =
      !pdplToChange.personalDataProtectionLaw;
    console.log(this.phoneNumberArray);
  }
  phoneCheckFn(arrayIndex: any) {
    let phoneToChange = this.phoneNumberArray[arrayIndex];
    phoneToChange.phone = !phoneToChange.phone;
    console.log(this.phoneNumberArray);
  }
  smsCheckFn(arrayIndex: any) {
    let smsToChange = this.phoneNumberArray[arrayIndex];
    smsToChange.sms = !smsToChange.sms;
    console.log(this.phoneNumberArray);
  }
  emailCheckFn(arrayIndex: any) {
    let emailToChange = this.phoneNumberArray[arrayIndex];
    emailToChange.email = !emailToChange.email;
    console.log(this.phoneNumberArray);
  }

  getProvinceFn(): void {

    this.customerManagementService.getProvince().subscribe({
      next: (result: any) => 
      {
        this.provinces = result.results;
      },
      error: (error: any) => 
      {
        console.log(error);
      },
      complete: () => {},
    });
  }

  onProvinceSelected(): void {

    this.districts = [];
    this.neighborhoods = [];
    
    this.addressForm.value.district= "";
    this.addressForm.value.neighborhood= "";
  
    let address: any = this.addressForm.value;

    const selectedProvinceId = this.provinces.find((p: any) => p.ADI === address.province).IL_ID;

    if (selectedProvinceId) {
      this.customerManagementService.getDistrict(selectedProvinceId).subscribe({
        next: (result: any) => {
          this.districts = result.results;
        },
        error: (error: any) => {
          console.log(error);
        },
        complete: () => {},
      });
    }
  }

  onDistrictSelected(): void {
    
    this.addressForm.value.neighborhood= "";
    let address: any = this.addressForm.value;

    const selectedDistrictId = this.districts.find((d: any) => d.ADI === address.district).ILCE_ID;

    if (selectedDistrictId) {

      this.customerManagementService.getNeighborhood(selectedDistrictId).subscribe({
          next: (result: any) => 
          {
            this.neighborhoods = result.results;
          },
          error: (error: any) => 
          {
            console.log(error);
          },
          complete: () => {},
        });
    }
  }

  onNeighborhoodSelected(): void {

    let address: any = this.addressForm.value;

    const selectedNeighborhoodId = this.neighborhoods.find((n: any) => n.ADI === address.neighborhood).ID;

    if (selectedNeighborhoodId) {
      // this.customerManagementService.getNeighborhood(selectedNeighborhoodId).subscribe(
      //   {
      //     next:(result:any)=>{
      //       console.log(result.results)
      //       this.neighborhoods=result.results;
      //       //console.log(this.neighborhoods)
      //     },
      //     error:(error:any)=>{
      //       console.log(error)
      //     },
      //     complete:()=>{
      //     }
      //   }
      // )
    }
  }
}
