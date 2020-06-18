import { TestBed } from '@angular/core/testing';

import { SimuladorService } from './simulador.service';

describe('SimuladorService', () => {
  let service: SimuladorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimuladorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
