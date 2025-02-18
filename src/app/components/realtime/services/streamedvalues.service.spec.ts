import { TestBed } from '@angular/core/testing';

import { StreamedvaluesService } from './streamedvalues.service';

describe('StreamedvaluesService', () => {
  let service: StreamedvaluesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StreamedvaluesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
