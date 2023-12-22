import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-delivery-person',
  templateUrl: './create-delivery-person.component.html',
  styleUrls: ['./create-delivery-person.component.css']
})
export class CreateDeliveryPersonComponent {

  constructor(private fb: FormBuilder) {}
  createDeliveryPersonData: object = {};
  createDeliveryPersonForm = this.fb.group({
    deliveryPersonName: new FormControl(''),
    deliveryPersonStatus: new FormControl(''),
    stockMovement: new FormControl(''),
    remainingStock: new FormControl(''),

  });  

  createDeliveryPersonFn(): void {
    if (this.createDeliveryPersonForm.valid ) {
      this.createDeliveryPersonData = {
        ...this.createDeliveryPersonForm.value,
      };
      this.createDeliveryPersonForm.reset();
    }
  }

}
