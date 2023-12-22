import { TestBed } from '@angular/core/testing';

import { WorkTimeManagementService } from './work-time-management.service';

describe('WorkTimeManagementService', () => {
  let service: WorkTimeManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkTimeManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
