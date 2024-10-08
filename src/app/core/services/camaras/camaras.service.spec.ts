import { TestBed } from '@angular/core/testing';

import { CamarasService } from './camaras.service';

describe('CamarasService', () => {
  let service: CamarasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CamarasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
