import { TestBed } from '@angular/core/testing';

import { AhserviceService } from './ahservice.service';

describe('AhserviceService', () => {
  let service: AhserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AhserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
