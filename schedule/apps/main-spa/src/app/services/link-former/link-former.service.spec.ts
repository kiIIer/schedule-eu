import { TestBed } from '@angular/core/testing';

import { LinkFormerService } from './link-former.service';

describe('LinkFormerService', () => {
  let service: LinkFormerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkFormerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
