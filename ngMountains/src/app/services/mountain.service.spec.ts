import { TestBed } from '@angular/core/testing';

import { MountainService } from './mountain.service';

describe('MountainService', () => {
  let service: MountainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MountainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
