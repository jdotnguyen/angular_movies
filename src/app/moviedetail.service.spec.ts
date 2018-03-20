import { TestBed, inject } from '@angular/core/testing';

import { MoviedetailService } from './moviedetail.service';

describe('MoviedetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoviedetailService]
    });
  });

  it('should be created', inject([MoviedetailService], (service: MoviedetailService) => {
    expect(service).toBeTruthy();
  }));
});
