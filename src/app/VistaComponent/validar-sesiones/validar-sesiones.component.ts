import { Component, OnInit } from '@angular/core';
import { Reporte } from 'src/app/Modelo/reporte';
import { Sesion } from 'src/app/Modelo/sesion';
import { PacienteService } from 'src/app/Service/paciente.service';

@Component({
  selector: 'app-validar-sesiones',
  templateUrl: './validar-sesiones.component.html',
  styleUrls: ['./validar-sesiones.component.css']
})
export class ValidarSesionesComponent implements OnInit {
  panelOpenState = false;
  listarPaciente : Reporte[] = [];
  constructor( private pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.reporte();
  }

  reporte(){
    this.pacienteService.reporte().subscribe(data =>{
      this.listarPaciente = data;
      console.log(this.listarPaciente);
     
    })
  }
}
