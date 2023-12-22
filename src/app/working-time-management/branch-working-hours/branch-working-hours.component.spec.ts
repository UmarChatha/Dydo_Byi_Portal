import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchWorkingHoursComponent } from './branch-working-hours.component';

describe('BranchWorkingHoursComponent', () => {
  let component: BranchWorkingHoursComponent;
  let fixture: ComponentFixture<BranchWorkingHoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BranchWorkingHoursComponent]
    });
    fixture = TestBed.createComponent(BranchWorkingHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
