import { TestBed } from '@angular/core/testing';

import { CancelrequestService } from './cancelrequest.service';

describe('CancelrequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CancelrequestService = TestBed.get(CancelrequestService);
    expect(service).toBeTruthy();
  });
});
