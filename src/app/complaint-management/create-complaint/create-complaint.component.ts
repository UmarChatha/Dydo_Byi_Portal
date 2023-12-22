import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-complaint',
  templateUrl: './create-complaint.component.html',
  styleUrls: ['./create-complaint.component.css'],
})
export class CreateComplaintComponent {
  count1 = 0;
  count2 = 0;
  count3 = 0;
  count4 = 0;
  isComplaintDiv: boolean = true;
  complaintDivFn(): void {
    this.isComplaintDiv = !this.isComplaintDiv;
  }
  constructor(private fb: FormBuilder) {}
  createComplaintData: object = {};
  createComplaintForm = this.fb.group({
    subject: new FormControl(''),
    complaintDescription: new FormControl(''),
    complaintOrderNumber: new FormControl(''),
    customerAddress: new FormControl(''),
    complaintReminder: new FormControl(''),
    contactType: new FormControl(''),
    complaintUpperGroup: new FormControl(''),
    complaintType: new FormControl(''),
    complaintOrSuggestion: new FormControl(''),
    complaintOrSuggestionDate: new FormControl(''),
    complaintStatus: new FormControl(''),
  });
  freeProductForm = this.fb.group({
    freeProductOneQuantity: new FormControl(0),
    freeProductTwoQuantity: new FormControl(0),
    freeProductThreeQuantity: new FormControl(0),
    freeProductFourQuantity: new FormControl(0),
  });
  increaseQuantity(productName: string) {
    if (productName == 'freeProductOneQuantity') {
      this.count1++;
      this.freeProductForm.value.freeProductOneQuantity = this.count1;
    } else if (productName == 'freeProductTwoQuantity') {
      this.count2++;
      this.freeProductForm.value.freeProductTwoQuantity = this.count2;
    } else if (productName == 'freeProductThreeQuantity') {
      this.count3++;
      this.freeProductForm.value.freeProductThreeQuantity = this.count3;
    } else if (productName == 'freeProductFourQuantity') {
      this.count4++;
      this.freeProductForm.value.freeProductFourQuantity = this.count4;
    }
  }
  decreaseQuantity(productName: string) {
    if (productName == 'freeProductOneQuantity') {
      this.count1--;
      this.freeProductForm.value.freeProductOneQuantity = this.count1;
    } else if (productName == 'freeProductTwoQuantity') {
      this.count2--;
      this.freeProductForm.value.freeProductTwoQuantity = this.count2;
    } else if (productName == 'freeProductThreeQuantity') {
      this.count3--;
      this.freeProductForm.value.freeProductThreeQuantity = this.count3;
    } else if (productName == 'freeProductFourQuantity') {
      this.count4--;
      this.freeProductForm.value.freeProductFourQuantity = this.count4;
    }
  }
  createComplaintSubmitFn(): void {
    if (this.createComplaintForm.valid && this.freeProductForm.valid) {
      this.createComplaintData = {
        ...this.createComplaintForm.value,
        ...this.freeProductForm.value,
      };
      this.createComplaintForm.reset();
    }
  }
}