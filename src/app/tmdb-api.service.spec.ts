/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TmdbApiService } from './tmdb-api.service';

describe('Service: TmdbApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TmdbApiService]
    });
  });

  it('should ...', inject([TmdbApiService], (service: TmdbApiService) => {
    expect(service).toBeTruthy();
  }));
});
