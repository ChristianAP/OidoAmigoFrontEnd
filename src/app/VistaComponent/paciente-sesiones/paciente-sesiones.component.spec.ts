import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteSesionesComponent } from './paciente-sesiones.component';

describe('PacienteSesionesComponent', () => {
  let component: PacienteSesionesComponent;
  let fixture: ComponentFixture<PacienteSesionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacienteSesionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteSesionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
