import { TestBed } from '@angular/core/testing';

import { ScannerServiceService } from './scanner-service.service';

describe('ScannerServiceService', () => {
  let service: ScannerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScannerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
