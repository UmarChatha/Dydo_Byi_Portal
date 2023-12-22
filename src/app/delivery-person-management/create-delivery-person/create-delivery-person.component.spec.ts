import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDeliveryPersonComponent } from './create-delivery-person.component';

describe('CreateDeliveryPersonComponent', () => {
  let component: CreateDeliveryPersonComponent;
  let fixture: ComponentFixture<CreateDeliveryPersonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateDeliveryPersonComponent]
    });
    fixture = TestBed.createComponent(CreateDeliveryPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
