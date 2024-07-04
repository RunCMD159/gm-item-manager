import { TestBed } from '@angular/core/testing';

import { ConfigExtractorService } from './config-extractor.service';

describe('ConfigExtractorService', () => {
  let service: ConfigExtractorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigExtractorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
