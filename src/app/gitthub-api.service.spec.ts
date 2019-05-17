import { TestBed } from '@angular/core/testing';
import {  HttpClient } from '@angular/common/http';
import { GitthubApiService } from './gitthub-api.service';

describe('GitthubApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      GitthubApiService,
      {provide: HttpClient, useValue: {get: () => {}}}
    ]
  }));

  it('should be created', () => {
    const service: GitthubApiService = TestBed.get(GitthubApiService);
    expect(service).toBeTruthy();
  });
});
