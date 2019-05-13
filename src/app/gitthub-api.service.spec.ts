import { TestBed } from '@angular/core/testing';

import { GitthubApiService } from './gitthub-api.service';

describe('GitthubApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitthubApiService = TestBed.get(GitthubApiService);
    expect(service).toBeTruthy();
  });
});
