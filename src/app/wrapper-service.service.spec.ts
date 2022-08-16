import { TestBed } from '@angular/core/testing';

import { WrapperService } from './wrapper-service.service';

describe('WrapperService', () => {
  let service: WrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WrapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
