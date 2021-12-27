import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPsicologoComponent } from './registro-psicologo.component';

describe('RegistroPsicologoComponent', () => {
  let component: RegistroPsicologoComponent;
  let fixture: ComponentFixture<RegistroPsicologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroPsicologoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
