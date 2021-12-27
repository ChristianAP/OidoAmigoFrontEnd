import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Modelo/persona';
import { PersonaService } from 'src/app/Service/persona.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
}

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})


export class PruebaComponent implements OnInit {
  listarPrueba : Persona[] = [];
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = this.listarPrueba;
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.getFacultades();
  
  }// LISTAR FACULTADES
getFacultades(){
    this.personaService.getAllPrueba().subscribe(
      (data) => {
        this.listarPrueba = data;
        console.log(this.listarPrueba);
      }
    );
  }
}

