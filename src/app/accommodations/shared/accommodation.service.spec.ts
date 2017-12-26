import { TestBed, inject } from '@angular/core/testing';

import { AccommodationService } from './accommodation.service';
import {HttpClientModule} from '@angular/common/http';

describe('AccommodationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccommodationService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([AccommodationService], (service: AccommodationService) => {
    expect(service).toBeTruthy();
  }));
});
