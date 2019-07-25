import { TestBed } from '@angular/core/testing';

import { DisplayUserDetailsService } from './display-user-details.service';

describe('DisplayUserDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplayUserDetailsService = TestBed.get(DisplayUserDetailsService);
    expect(service).toBeTruthy();
  });
});
