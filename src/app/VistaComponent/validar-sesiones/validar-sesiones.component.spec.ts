import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarSesionesComponent } from './validar-sesiones.component';

describe('ValidarSesionesComponent', () => {
  let component: ValidarSesionesComponent;
  let fixture: ComponentFixture<ValidarSesionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidarSesionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarSesionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
