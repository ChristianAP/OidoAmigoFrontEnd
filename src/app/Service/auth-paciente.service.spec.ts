import { TestBed } from '@angular/core/testing';

import { AuthPacienteService } from './auth-paciente.service';

describe('AuthPacienteService', () => {
  let service: AuthPacienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthPacienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
