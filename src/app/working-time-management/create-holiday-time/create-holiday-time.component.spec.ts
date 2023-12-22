import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHolidayTimeComponent } from './create-holiday-time.component';

describe('CreateHolidayTimeComponent', () => {
  let component: CreateHolidayTimeComponent;
  let fixture: ComponentFixture<CreateHolidayTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateHolidayTimeComponent]
    });
    fixture = TestBed.createComponent(CreateHolidayTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
