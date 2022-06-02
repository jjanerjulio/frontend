import { TestBed } from '@angular/core/testing';

import { EscribirService } from './escribir.service';

describe('EscribirService', () => {
  let service: EscribirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EscribirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
