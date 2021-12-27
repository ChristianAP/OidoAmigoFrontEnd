import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Psicologo } from 'src/app/Modelo/psicologo';
import { PsicologoService } from 'src/app/Service/psicologo.service';

@Component({
  selector: 'app-registro-psicologo',
  templateUrl: './registro-psicologo.component.html',
  styleUrls: ['./registro-psicologo.component.css']
})
export class RegistroPsicologoComponent implements OnInit {
  psicologo : Psicologo = new Psicologo();
  
  constructor(private psicologoService: PsicologoService,  private toastrService: ToastrService) { }

  ngOnInit(): void {
    (<HTMLDivElement>document.getElementById("Egresado")).style.display = "none";
    (<HTMLDivElement>document.getElementById("Estudiante")).style.display = "none";
  }
  rolDivs(){
    var s =  (<HTMLSelectElement>document.getElementById("select1")).value;
    console.log(s);
    if(s == "1" || s == "2"){
        (<HTMLDivElement>document.getElementById("Egresado")).style.display = "block";
        (<HTMLDivElement>document.getElementById("Estudiante")).style.display = "none";
    }else if(s == "3" || s == "0"){
    (<HTMLDivElement>document.getElementById("Egresado")).style.display = "none";
    (<HTMLDivElement>document.getElementById("Estudiante")).style.display = "block";

    }
    }
    
  crearEgresado(){
    console.log(this.psicologo);
    this.psicologoService.createEgresado(this.psicologo).subscribe(data=>{
      (<HTMLInputElement>document.getElementsByClassName("form-control")[0]).value = " ";
      (<HTMLInputElement>document.getElementsByClassName("form-control")[1]).value = " ";
      (<HTMLInputElement>document.getElementsByClassName("form-control")[2]).value = " ";
      (<HTMLInputElement>document.getElementsByClassName("form-control")[3]).value = " ";
      (<HTMLInputElement>document.getElementsByClassName("form-control")[4]).value = " ";
      (<HTMLInputElement>document.getElementsByClassName("form-control")[5]).value = " ";
      (<HTMLInputElement>document.getElementsByClassName("form-control")[6]).value = " ";
      (<HTMLInputElement>document.getElementsByClassName("form-control")[7]).value = " ";
      (<HTMLInputElement>document.getElementsByClassName("form-control")[8]).value = " ";
      this.toastrService.success('Registro Creado Satisfactoriamente');
         this.ngOnInit();
    })
  }
  crearEstudiante(){
    console.log(this.psicologo);
    this.psicologoService.createEstudiante(this.psicologo).subscribe(data=>{
    (<HTMLInputElement>document.getElementsByClassName("form-control")[0]).value = " ";
    (<HTMLInputElement>document.getElementsByClassName("form-control")[1]).value = " ";
    (<HTMLInputElement>document.getElementsByClassName("form-control")[2]).value = " ";
    (<HTMLInputElement>document.getElementsByClassName("form-control")[3]).value = " ";
    (<HTMLInputElement>document.getElementsByClassName("form-control")[4]).value = " ";
    (<HTMLInputElement>document.getElementsByClassName("form-control")[5]).value = " ";
    (<HTMLInputElement>document.getElementsByClassName("form-control")[6]).value = " ";
    (<HTMLInputElement>document.getElementsByClassName("form-control")[7]).value = " ";
    (<HTMLInputElement>document.getElementsByClassName("form-control")[8]).value = " ";

      this.toastrService.success('Registro Creado Satisfactoriamente');

         this.ngOnInit();
    })
  }
}
