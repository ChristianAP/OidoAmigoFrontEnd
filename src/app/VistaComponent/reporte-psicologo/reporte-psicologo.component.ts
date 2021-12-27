import { Component, OnInit } from '@angular/core';
import { CargarScriptService } from 'src/app/cargar-script.service';
import { Egresado } from 'src/app/Modelo/egresado';
import { PsicologoService } from 'src/app/Service/psicologo.service';
import {ThemePalette} from '@angular/material/core';
import Swal from 'sweetalert2';
import { PersonaUP } from 'src/app/Modelo/personaUp';
import { EgresadoUP } from 'src/app/Modelo/egresadoUp';
import { Estudiante } from 'src/app/Modelo/estudiante';
import { EstudianteUP } from 'src/app/Modelo/estudianteUP';

@Component({
  selector: 'app-reporte-psicologo',
  templateUrl: './reporte-psicologo.component.html',
  styleUrls: ['./reporte-psicologo.component.css']
})
export class ReportePsicologoComponent implements OnInit {
  ///////////////////////// EGRESADOS
  listEgresado : Egresado[] =[];
  listEgresadoID : Egresado[] =[];
  updateEgresado : EgresadoUP = new EgresadoUP();
  persona: PersonaUP = new PersonaUP();
  egresado: EgresadoUP = new EgresadoUP();
  ////////////////////////// ESTUDIANTES 
  listEstudiantes : Estudiante[] = [];
  listEstudianteID : Estudiante[] = [];
  estudiante: EstudianteUP = new EstudianteUP();
  constructor(private _CargaScripts: CargarScriptService, private PsicologoService: PsicologoService) {
    
    }
  ngOnInit(): void {
    this.getEgresados(); 
    this.getEstudiantes();
    this._CargaScripts.Carga(["modal"]); 
  }
  ///////// LISTAR EGRESADOS
  getEgresados(){
    this.PsicologoService.getEgresado().subscribe(
      (data) => {
        this.listEgresado = data;
        console.log(this.listEgresado);
      }
    );
  }

  ///////// LISTAR EGRESADOS ID
  getEgresadosID(id:Egresado){
    this.PsicologoService.getEgresadoID(id.idpersona).subscribe(
      (data) => {
        this.listEgresadoID = data;
        console.log(this.listEgresadoID);
      }
    );
  }
//////////////// MODIFICAR EGRESADOS
 UpdateEgresado(egre: Egresado) {
  this.persona.idpersona = egre.idpersona;
  this.persona.nombre = egre.nombre;
  this.persona.apellido = egre.apellido;
  this.persona.correo = egre.correo;
  this.persona.genero = egre.genero;
  this.persona.dnipasaporte = egre.dnipasaporte;
  this.persona.celular = egre.celular;
  this.persona.ciudad = egre.ciudad;

  this.egresado.idegresado = egre.idpersona;
  this.egresado.codigo_egresado = egre.codigo_egresado;
  this.egresado.horario = egre.horario;
  this.egresado.universidad = egre.universidad;
  this.egresado.grado = egre.grado;
      Swal.fire({
      title: 'Estas seguro?',
      text: "Esta accion no se podra revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, modificar!'
    }).then((result) => {
      if (result.value) {
      
        this.PsicologoService.updateEgresado(this.egresado.idegresado, this.egresado).subscribe((data) => {
          this.PsicologoService.updateEgresadoPer(this.persona.idpersona, this.persona).subscribe((data) => {
          })
          this.ngOnInit();
        })
        Swal.fire(
          'Modificar!',
          'La accion ha sido modificada',
          'success'
        )
      }
    })
 }
 ////////////// DELETE EGRESADOS
 DeleteEgresado(egresado:Egresado){
  Swal.fire({
    title: 'Estas seguro?',
    text: "Esta accion no se podra revertir!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminar!'
  }).then((result) => {
    if (result.value) {

      this.PsicologoService.deleteEgresado(egresado).subscribe(data=>{
        this.listEgresadoID=this.listEgresadoID.filter(r=>r!==egresado);
        this.getEgresados();
      });
      Swal.fire({
        position: 'center',
        icon: 'success',
        text: 'El Psicólogo Egresado se ha eliminado correctamente!',
        showConfirmButton: false,
        timer: 1500
      })
    }
  })
 }
 
  ///////// LISTAR ESTUDIANTES
  getEstudiantes(){
    this.PsicologoService.getEstudiantes().subscribe(
      (data) => {
        this.listEstudiantes = data;
        console.log(this.listEstudiantes);
      }
    );
  }

  ///////// LISTAR ESTUDIANTES ID
  getEstudiantesID(id:Estudiante){
    this.PsicologoService.getEstudianteID(id.idpersona).subscribe(
      (data) => {
        this.listEstudianteID = data;
        console.log(this.listEstudianteID);
      }
    );
  }
  //////////////// MODIFICAR EGRESADOS
 UpdateEstudiante(estu: Estudiante) {
  this.persona.idpersona = estu.idpersona;
  this.persona.nombre = estu.nombre;
  this.persona.apellido = estu.apellido;
  this.persona.correo = estu.correo;
  this.persona.genero = estu.genero;
  this.persona.dnipasaporte = estu.dnipasaporte;
  this.persona.celular = estu.celular;
  this.persona.ciudad = estu.ciudad;

  this.estudiante.idestudiante = estu.idpersona;
  this.estudiante.codigo_estudiante = estu.codigo_estudiante;
  this.estudiante.horario = estu.horario;
  this.estudiante.ciclo = estu.ciclo;
  this.estudiante.grupo = estu.grupo;
  this.estudiante.universidad = estu.universidad;
      Swal.fire({
      title: 'Estas seguro?',
      text: "Esta accion no se podra revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, modificar!'
    }).then((result) => {
      if (result.value) {
      
        this.PsicologoService.updateEstudiante(this.estudiante.idestudiante, this.estudiante).subscribe((data) => {
          this.PsicologoService.updateEstudiantePer(this.persona.idpersona, this.persona).subscribe((data) => {
          })
          this.ngOnInit();
        })
        Swal.fire(
          'Modificar!',
          'La accion ha sido modificada',
          'success'
        )
      }
    })
 }
 ////////////// DELETE EGRESADOS
 DeleteEstudiante(estudiante:Estudiante){
  Swal.fire({
    title: 'Estas seguro?',
    text: "Esta accion no se podra revertir!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminar!'
  }).then((result) => {
    if (result.value) {

      this.PsicologoService.deleteEstudiante(estudiante).subscribe(data=>{
        this.listEstudianteID=this.listEstudianteID.filter(r=>r!==estudiante);
        this.getEstudiantes();
      });
      Swal.fire({
        position: 'center',
        icon: 'success',
        text: 'El Psicólogo Egresado se ha eliminado correctamente!',
        showConfirmButton: false,
        timer: 1500
      })
    }
  })
 }
 modificar(){
   (<HTMLInputElement>document.getElementById("nombre2")).disabled = false;
   (<HTMLInputElement>document.getElementById("apellido2")).disabled = false;
   (<HTMLInputElement>document.getElementById("correo2")).disabled = false;
   (<HTMLSelectElement>document.getElementById("genero2")).disabled = false;
   (<HTMLInputElement>document.getElementById("dni2")).disabled = false;
   (<HTMLInputElement>document.getElementById("celular2")).disabled = false;
   (<HTMLInputElement>document.getElementById("ciudad2")).disabled = false;
   (<HTMLInputElement>document.getElementById("codigo2")).disabled = false;
   (<HTMLInputElement>document.getElementById("horario2")).disabled = false;
   (<HTMLInputElement>document.getElementById("ciclo2")).disabled = false;
   (<HTMLInputElement>document.getElementById("grupo2")).disabled = false;
   (<HTMLInputElement>document.getElementById("universidad2")).disabled = false;
   (<HTMLButtonElement>document.getElementById("butoncito2")).disabled = false;
 }

 block(){
  (<HTMLInputElement>document.getElementById("nombre2")).disabled = true;
  (<HTMLInputElement>document.getElementById("apellido2")).disabled = true;
  (<HTMLInputElement>document.getElementById("correo2")).disabled = true;
  (<HTMLSelectElement>document.getElementById("genero2")).disabled = true;
  (<HTMLInputElement>document.getElementById("dni2")).disabled = true;
  (<HTMLInputElement>document.getElementById("celular2")).disabled = true;
  (<HTMLInputElement>document.getElementById("ciudad2")).disabled = true;
  (<HTMLInputElement>document.getElementById("codigo2")).disabled = true;
  (<HTMLInputElement>document.getElementById("horario2")).disabled = true;
  (<HTMLInputElement>document.getElementById("ciclo2")).disabled = true;
  (<HTMLInputElement>document.getElementById("grupo2")).disabled = true;
  (<HTMLInputElement>document.getElementById("universidad2")).disabled = true;
  (<HTMLButtonElement>document.getElementById("butoncito2")).disabled = true;
}
modificar2(){
  (<HTMLInputElement>document.getElementById("nombre3")).disabled = false;
  (<HTMLInputElement>document.getElementById("apellido3")).disabled = false;
  (<HTMLInputElement>document.getElementById("correo3")).disabled = false;
  (<HTMLSelectElement>document.getElementById("genero3")).disabled = false;
  (<HTMLInputElement>document.getElementById("dni3")).disabled = false;
  (<HTMLInputElement>document.getElementById("celular3")).disabled = false;
  (<HTMLInputElement>document.getElementById("ciudad3")).disabled = false;
  (<HTMLInputElement>document.getElementById("codigo3")).disabled = false;
  (<HTMLInputElement>document.getElementById("horario3")).disabled = false;
  (<HTMLInputElement>document.getElementById("universidad3")).disabled = false;
  (<HTMLInputElement>document.getElementById("grado3")).disabled = false;
  (<HTMLButtonElement>document.getElementById("butoncito3")).disabled = false;
}

block2(){
 (<HTMLInputElement>document.getElementById("nombre3")).disabled = true;
 (<HTMLInputElement>document.getElementById("apellido3")).disabled = true;
 (<HTMLInputElement>document.getElementById("correo3")).disabled = true;
 (<HTMLSelectElement>document.getElementById("genero3")).disabled = true;
 (<HTMLInputElement>document.getElementById("dni3")).disabled = true;
 (<HTMLInputElement>document.getElementById("celular3")).disabled = true;
 (<HTMLInputElement>document.getElementById("ciudad3")).disabled = true;
 (<HTMLInputElement>document.getElementById("codigo3")).disabled = true;
 (<HTMLInputElement>document.getElementById("horario3")).disabled = true;
 (<HTMLInputElement>document.getElementById("universidad3")).disabled = true;
 (<HTMLInputElement>document.getElementById("grado3")).disabled = true;
 (<HTMLButtonElement>document.getElementById("butoncito3")).disabled = true;
}
}
