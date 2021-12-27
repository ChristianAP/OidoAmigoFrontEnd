import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GReporte } from 'src/app/Modelo/GReporte';
import { PacienteView } from 'src/app/Modelo/pacienteView';
import { Reporte } from 'src/app/Modelo/reporte';
import { Sesion } from 'src/app/Modelo/sesion';
import { PacienteService } from 'src/app/Service/paciente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
  panelOpenState = false;
  data: string = `${window.sessionStorage.getItem('dataus')}`;
  idpersona!: number;
  idrol!: number;
  idpaciente!: number;
  constructor(private http: HttpClient, private pacienteService: PacienteService) { }
  listPaciente : PacienteView []= [];
  paciente: PacienteView = new PacienteView();
  estado! : String;
  sesion1 : Sesion [] = [];
  sesion2 : Sesion [] = [];
  sesion3 : Sesion [] = [];
  sesionID : Sesion [] = [];
  reporteID : GReporte [] = [];
  sesionC : Sesion = new Sesion();
  reportFinal: Reporte[] = [];
  ngOnInit(): void {
    this.obtenerDataPaciente();
  }

  obtenerDataPaciente(){
    let arrData = JSON.parse(this.data);
    this.idpersona = arrData["idpersona"];
    this.idrol = arrData["idrol"];
    this.paciente.idpersona = this.idpersona;
    this.paciente.idrol = this.idrol;
    this.pacienteService.obtenerPaciente(this.paciente).subscribe(data => {
      //console.log(data[0].idpersona);
            if (data.length == 27) {
                this.listPaciente == null;
                console.log("NO HAY DATA");
                (<HTMLDivElement>document.getElementById("no_data")).style.display = "block";
                //(<HTMLDivElement>document.getElementById("data")).style.display = "none";
            }else{
                this.listPaciente = data;
                console.log("ID Paciente: " + this.listPaciente[0].idpersona);
                    this.obtenerSesion1(this.listPaciente[0].idpersona);
                    this.obtenerSesion2(this.listPaciente[0].idpersona);
                    this.obtenerSesion3(this.listPaciente[0].idpersona);
                    this.validar(this.listPaciente[0].idpersona);
                    this.reporte(this.listPaciente[0].idpersona);
                if (this.listPaciente[0].estado == 0) {
                  this.estado = "ESPERA"
                }else if(this.listPaciente[0].estado == 1){
                  this.estado = "COMPLETADO"
                }else if(this.listPaciente[0].estado == 2){
                  this.estado = "EN PROGRESO"
                }else{
                  this.estado = "TRUNCO"
                }
                (<HTMLDivElement>document.getElementById("data")).style.display = "block";
                //(<HTMLDivElement>document.getElementById("no_data")).style.display = "none";
          }
    })
  }
  obtenerSesion1( id : number){
    this.pacienteService.obtenerSesion1(id).subscribe(data =>{
      console.log(data.length)
      if (data.length == 27) {
          this.sesion1 == null;
          console.log("NO HAY DATA en SESION 1");
          (<HTMLDivElement>document.getElementById("agree")).style.display = "block";
          (<HTMLButtonElement>document.getElementById("report1")).disabled = true;
      }else{
          this.sesion1[0] = data[0];
            console.log(this.sesion1[0]);
          console.log(this.sesion1[0]);
      }
    })
  }
  obtenerSesion2( id : number){
    this.pacienteService.obtenerSesion2(id).subscribe(data =>{
      console.log(data.length)
      if (data.length == 27) {
          this.sesion2 == null;
          console.log("NO HAY DATA en SESION 2");
          (<HTMLDivElement>document.getElementById("agree1")).style.display = "block";
          (<HTMLButtonElement>document.getElementById("report2")).disabled = true;
      }else{
          this.sesion2[0] = data[0];
            console.log(this.sesion2[0]);
          console.log(this.sesion2[0]);
      }
    })
  }
  obtenerSesion3( id : number){
    this.pacienteService.obtenerSesion3(id).subscribe(data =>{
      console.log(data.length)
      if (data.length == 27) {
          this.sesion3 == null;
          console.log("NO HAY DATA en SESION 3");
          (<HTMLDivElement>document.getElementById("agree2")).style.display = "block";
          (<HTMLButtonElement>document.getElementById("report3")).disabled = true;
      }else{
          this.sesion3[0] = data[0];
            console.log(this.sesion3[0]);
          console.log(this.sesion3[0]);
      }
    })
  }
  getData(id: number){
    console.log(id);
    this.pacienteService.getSesion(id).subscribe(data =>{
      this.sesionID = data;
      console.log(data);
    })
  }
 createSesion(sesion:Sesion){
   console.log("click: "+ sesion);
   this.pacienteService.createSesion(sesion).subscribe(data=>{
     this.obtenerDataPaciente();
   })
 }
 getReporte(id:number){
   console.log(id);
   this.pacienteService.getReporte(id).subscribe(data => {
     this.reporteID = data;
     console.log(this.reporteID);
   })
 }
 createReporte(greporte : GReporte){
   this.pacienteService.crearReportes(greporte).subscribe(data =>{
      this.obtenerDataPaciente();
   })
 }

 validar(id:number){
   this.pacienteService.validar(id).subscribe(data => {
     console.log( data);
    if(data.length ==  48){
      console.log( data);
      (<HTMLButtonElement>document.getElementById("report1")).style.display = "block";
      (<HTMLButtonElement>document.getElementById("report2")).style.display = "block";
      (<HTMLButtonElement>document.getElementById("report3")).style.display = "block";
    }else{
      console.log( data);
      (<HTMLButtonElement>document.getElementById("reportFinal")).style.display = "block";
    }
   })
 }

 reporte(id:number){
  this.pacienteService.reporteFinal(id).subscribe(data =>{
    this.reportFinal = data;
    console.log(this.reportFinal);
   
  })
}
finalizar(paci:Reporte){
  paci.idpsicologo= this.idpersona;
  console.log("ESTE ES EL ID P = " +paci.idpsicologo);
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'FINALIZAR CASO ASIGNADO',
    text: "¿El paciente debe de tomar otras 3 sesiones o ah solucionado su problema y ya no neesita otra atención?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Finalizar Caso',
    cancelButtonText: 'Asignar a Caso Trunco',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      this.pacienteService.finalizar(paci).subscribe(data => {
                  //console.log(paci.idpersona  + " , +++" + paci.idpsicologo);
      })
      swalWithBootstrapButtons.fire(
            'CASO FINALIZADO',
            'El caso se ah culminado con éxito, se le asignará otro paciente en breve ...',
            'success'
          )

      this.obtenerDataPaciente();
      document.location.reload();
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      this.pacienteService.trunco(paci).subscribe(data => {
            
      })
      swalWithBootstrapButtons.fire(
        'ASIGNADO A CASO TRUNCO',
        'Se le asignará otro psicólogo analizando la situación del paciente :)',
        'success'
      )
      this.obtenerDataPaciente();
      document.location.reload();
    }
  })
}
}
