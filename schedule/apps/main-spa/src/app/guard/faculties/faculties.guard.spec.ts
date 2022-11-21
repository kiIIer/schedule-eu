import { TestBed } from '@angular/core/testing';

import { FacultiesGuard } from './faculties.guard';

describe('FacultiesGuard', () => {
  let guard: FacultiesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FacultiesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
