import { TestBed } from '@angular/core/testing';

import { InfoPedidosService } from './info-pedidos.service';

describe('InfoPedidosService', () => {
  let service: InfoPedidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoPedidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
