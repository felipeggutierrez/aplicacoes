import { TestBed } from '@angular/core/testing';

import { RecuperaItensCategoriaService } from './recupera-itens-categoria.service';

describe('RecuperaItensCategoriaService', () => {
  let service: RecuperaItensCategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecuperaItensCategoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
