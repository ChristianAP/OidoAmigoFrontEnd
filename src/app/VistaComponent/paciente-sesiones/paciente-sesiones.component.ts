import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ObtPsico } from 'src/app/Modelo/obtPsico';
import { Sesion } from 'src/app/Modelo/sesion';
import { PacienteService } from 'src/app/Service/paciente.service';
import { PsicologoService } from 'src/app/Service/psicologo.service';

@Component({
  selector: 'app-paciente-sesiones',
  templateUrl: './paciente-sesiones.component.html',
  styleUrls: ['./paciente-sesiones.component.css']
})
export class PacienteSesionesComponent implements OnInit {

  constructor(private router: Router, private toastrService: ToastrService, private psicologoService: PsicologoService, private pacienteService: PacienteService) { }

  data: string = `${window.sessionStorage.getItem('data_paciente')}`;
  idpersona!: number;
  nombre!: String;
  apellido!: String;
  nombre_rol!:String;
  idpsicologo!: number;
  listarPsicologo : ObtPsico[] = [];
  sesion1: Sesion[] = [];
  sesion2: Sesion[] = [];
  sesion3: Sesion[] = [];
  sesion  = new Sesion();
  ngOnInit(): void {
    let arrData = JSON.parse(this.data);
    this.idpersona = arrData["idpersona"];
    this.nombre = arrData["nombre"];
    this.apellido = arrData["apellido"];
    this.nombre_rol = arrData["nombre_rol"];
    this.idpsicologo = arrData["idpsicologo"];
    console.log(this.idpsicologo);
    this.getPsico();
    this.obtenerSesion1();
    this.obtenerSesion2();
    this.obtenerSesion3();
  }
  getPsico(){
    console.log(this.idpsicologo);
    this.psicologoService.obtenerPsicologo(this.idpsicologo).subscribe(data=>{
      this.listarPsicologo = data;
      console.log(this.listarPsicologo);
    });
  }
  logout(){
    sessionStorage.removeItem('tokenPaciente');
    this.toastrService.error('Sesión cerrada exitosamente! Nos vemos ' + this.nombre);
    sessionStorage.removeItem('data_paciente');
    this.router.navigate(['/PLogin']);
  }
  obtenerSesion1(){
    this.pacienteService.obtenerSesion1(this.idpersona).subscribe(data =>{
      if (data.length == 1) {
          this.sesion1[0] = data[0];
          console.log(this.sesion1[0]);
      }else{
          this.sesion1 == null;
          (<HTMLDivElement>document.getElementById("no_data1")).style.display = "block";
          console.log("NO HAY DATA");
      }
    })
  }
  obtenerSesion2(){
    this.pacienteService.obtenerSesion2(this.idpersona).subscribe(data =>{
      if (data.length == 1) {
          this.sesion2[0] = data[0];
          console.log( this.sesion2[0]);
      }else{
          this.sesion2 == null;
          (<HTMLDivElement>document.getElementById("no_data2")).style.display = "block";
          console.log("NO HAY DATA");
      }
    })
  }
  obtenerSesion3(){
    this.pacienteService.obtenerSesion3(this.idpersona).subscribe(data =>{
      if (data.length == 1) {
          this.sesion3[0] = data[0];
          console.log(this.sesion3[0]);
      
      }else{
          this.sesion3 == null;
          (<HTMLDivElement>document.getElementById("no_data3")).style.display = "block";
          console.log("NO HAY DATA");
      }
    })
  }
}
