import { TestBed } from '@angular/core/testing';

import { SchedulesGuard } from './schedules.guard';

describe('SchedulesGuard', () => {
  let guard: SchedulesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SchedulesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
