import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { Opcion } from '../Modelo/opcion';
import { PacienteService } from '../Service/paciente.service';
import { CargarScriptService } from './../cargar-script.service';
@Component({
  selector: 'app-template-component',
  templateUrl: './template-component.component.html',
  styleUrls: ['./template-component.component.css']
})
export class TemplateComponentComponent implements OnInit {

  constructor(private _CargaScripts: CargarScriptService, private router: Router, private toastrService: ToastrService, private pacientService: PacienteService) { _CargaScripts.Carga(["template"]); _CargaScripts.Carga(["slide"]);  }
  data: string = `${window.sessionStorage.getItem('dataus')}`;
  idpersona!: number;
  idrol!: number;
  nombre!: String;
  apellido!: String;
  nombre_rol!:String;
  listOpciones: Opcion[] = [];
  ngOnInit(): void {
    let arrData = JSON.parse(this.data);
    this.idpersona = arrData["idpersona"];
    this.nombre = arrData["nombre"];
    this.apellido = arrData["apellido"];
    this.nombre_rol = arrData["nombre_rol"];
    this.idrol = arrData["idrol"];
    this.opciones();
  }
  opciones(){
    this.pacientService.opciones(this.idrol).subscribe(data=>{
      this.listOpciones = data;
    })
  }

  logout(){
    sessionStorage.removeItem('token');
    //Swal.fire({
    //  title: 'Al done!',
    //  text: 'Hope you have an excellent day',
    //  icon: 'success',
    //  //showCancelButton: true,
    //  confirmButtonText: 'Ok',
    //  //cancelButtonText: 'No, keep it'
    //  timer: 3500,
    //})
    
    this.toastrService.error('Sesión cerrada exitosamente! Nos vemos ' + this.nombre);
    sessionStorage.removeItem('dataus');
    this.router.navigate(['/login']);
  }
}
