import { TestBed } from '@angular/core/testing';

import { UsersInfoService } from './users-info.service';

describe('UsersInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersInfoService = TestBed.get(UsersInfoService);
    expect(service).toBeTruthy();
  });
});
