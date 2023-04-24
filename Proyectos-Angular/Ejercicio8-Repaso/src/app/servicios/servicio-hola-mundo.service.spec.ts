import { TestBed } from '@angular/core/testing';

import { ServicioHolaMundoService } from './servicio-hola-mundo.service';

describe('ServicioHolaMundoService', () => {
  let service: ServicioHolaMundoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioHolaMundoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
