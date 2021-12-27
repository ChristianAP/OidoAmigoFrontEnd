import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportePsicologoComponent } from './reporte-psicologo.component';

describe('ReportePsicologoComponent', () => {
  let component: ReportePsicologoComponent;
  let fixture: ComponentFixture<ReportePsicologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportePsicologoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportePsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
