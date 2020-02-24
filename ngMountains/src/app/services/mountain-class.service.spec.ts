import { TestBed } from '@angular/core/testing';

import { MountainClassService } from './mountain-class.service';

describe('MountainClassService', () => {
  let service: MountainClassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MountainClassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
