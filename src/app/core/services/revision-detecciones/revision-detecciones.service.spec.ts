import { TestBed } from '@angular/core/testing';

import { RevisionDeteccionesService } from './revision-detecciones.service';

describe('RevisionDeteccionesService', () => {
  let service: RevisionDeteccionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RevisionDeteccionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
