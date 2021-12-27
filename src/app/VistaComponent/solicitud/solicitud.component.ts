import { Component, OnInit } from '@angular/core';
import { Area } from 'src/app/Modelo/area';
import { Solicitud } from 'src/app/Modelo/solicitud';
import { SolicitudService } from 'src/app/Service/solicitud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {
  solicitud: Solicitud = new Solicitud();
  listarAreas : Area[] = [];
  constructor(private SolicitudService: SolicitudService) { }

  ngOnInit(): void {
    this.listarArea();
  }  
  generarSolicitud(){
    console.log(this.solicitud);
    this.SolicitudService.enviarSolicitud(this.solicitud).subscribe(data=>{
      Swal.fire({
        icon: 'success',
        title: 'SOLICITUD GENERADA EXITOSAMENTE',
        html: '<p class="txt" style="text-align: justify;">'+ data[0] +' </p><br/><br/><div style="widht = 90%; margin = auto; text-align = center; font-size: 80px;"><strong  style="text-align: justify; font-size = 95px;">'+data[1]+'</strong></div>' 
      })
         this.ngOnInit();
         //console.log("SOLICITUD ENVIADA CORRECTAMENTE");
         this.limpiar();
    })
  }
  listarArea(){ 
    this.SolicitudService.listarArea().subscribe((data)=>{
      this.listarAreas = data;
      //console.log(this.listarAreas);
    })
  }
  limpiar(){
    (<HTMLInputElement>document.getElementById("problema")).value = "";
    (<HTMLInputElement>document.getElementById("prefe")).value = "";
    (<HTMLInputElement>document.getElementById("dias")).value = "";
    (<HTMLInputElement>document.getElementById("name")).value = "";
    (<HTMLInputElement>document.getElementById("ape")).value = "";
    (<HTMLInputElement>document.getElementById("docID")).value = "";
    (<HTMLInputElement>document.getElementById("ed")).value = "";
    (<HTMLInputElement>document.getElementById("gen")).value = "";
    (<HTMLInputElement>document.getElementById("mail")).value = "";
    (<HTMLInputElement>document.getElementById("cel")).value = "";
    (<HTMLInputElement>document.getElementById("ciu")).value = "";
    (<HTMLInputElement>document.getElementById("dire")).value = "";
    (<HTMLInputElement>document.getElementById("exampleFormControlTextarea1")).value = "";
  }
}
