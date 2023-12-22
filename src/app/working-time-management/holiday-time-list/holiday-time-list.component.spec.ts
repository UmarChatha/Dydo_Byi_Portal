import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayTimeListComponent } from './holiday-time-list.component';

describe('HolidayTimeListComponent', () => {
  let component: HolidayTimeListComponent;
  let fixture: ComponentFixture<HolidayTimeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HolidayTimeListComponent]
    });
    fixture = TestBed.createComponent(HolidayTimeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
