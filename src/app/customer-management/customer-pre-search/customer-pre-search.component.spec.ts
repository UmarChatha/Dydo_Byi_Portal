import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPreSearchComponent } from './customer-pre-search.component';

describe('CustomerPreSearchComponent', () => {
  let component: CustomerPreSearchComponent;
  let fixture: ComponentFixture<CustomerPreSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerPreSearchComponent]
    });
    fixture = TestBed.createComponent(CustomerPreSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
