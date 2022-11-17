import { TestBed } from '@angular/core/testing';

import { SheetWorkerService } from './sheet-worker.service';

describe('SheetWorkerService', () => {
  let service: SheetWorkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SheetWorkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
