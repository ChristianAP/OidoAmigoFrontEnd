import { Component, OnInit } from '@angular/core';
import { CargarScriptService } from 'src/app/cargar-script.service';
import { Estate } from 'src/app/Modelo/estate';
import { PacienteService } from 'src/app/Service/paciente.service';

@Component({
  selector: 'app-activated',
  templateUrl: './activated.component.html',
  styleUrls: ['./activated.component.css']
})
export class ActivatedComponent implements OnInit {
  estateProgres: Estate[] = [];
  estateTrunco: Estate[] = [];
  estateComplete: Estate[] = [];
  estateEspera: Estate[] = [];
  ah1:number=1;
  ah2:number=1;
  ah3:number=1;
  ah4:number=1;
  constructor(private _CargaScripts: CargarScriptService,private pacienteService : PacienteService) {_CargaScripts.Carga(["report"]); }

  ngOnInit(): void {
    this.progreso();
    this.complete();
    this.trunco();
    this.espera();
  }

  progreso(){
    this.pacienteService.estateProceso().subscribe(data => {
      this.estateProgres = data;
    })
  }
  complete(){
    this.pacienteService.estateComplete().subscribe(data => {
      this.estateComplete = data;
    })
  }
  trunco(){
    this.pacienteService.estateTrunco().subscribe(data => {
      this.estateTrunco = data;
    })
  }
  espera(){
    this.pacienteService.estateEspera().subscribe(data => {
      this.estateEspera = data;
    })
  }
}
