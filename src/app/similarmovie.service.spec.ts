import { TestBed, inject } from '@angular/core/testing';

import { SimilarmovieService } from './similarmovie.service';

describe('SimilarmovieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimilarmovieService]
    });
  });

  it('should be created', inject([SimilarmovieService], (service: SimilarmovieService) => {
    expect(service).toBeTruthy();
  }));
});
