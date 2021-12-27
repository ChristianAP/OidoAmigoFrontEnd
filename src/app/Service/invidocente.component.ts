import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/Modelo/alumno';
import { Docente } from 'src/app/Modelo/docente';
import { Invitacion } from 'src/app/Modelo/invitacion';
import { InvitacionService } from 'src/app/Service/invitacion.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-invidocente',
  templateUrl: './invidocente.component.html',
  styleUrls: ['./invidocente.component.css']
})
export class InvidocenteComponent implements OnInit {
  listarUser: Docente[]=[];
  listarCorreo: Invitacion[]=[];
  p_cursorUser: Docente = new Docente();
  p_cursorCorreo: Invitacion = new Invitacion();
  
  ah1:number=1;
  constructor(private InvitacionService: InvitacionService, private router:Router) { }

  ngOnInit() {
    this.getAllRoles();
  }
  
  getAllRoles() {
    this.InvitacionService.getAllUsuario().subscribe(
      (data) => {
        this.listarUser = data;
        console.log(this.listarUser);
      }
    );
  }
  enviarCorreo(listarCorreo: Docente){
    let c=listarCorreo.correo;
    let d=listarCorreo.nombres;
    //alert(c);
    //console.log(c)
        this.InvitacionService.enviarCorreo(listarCorreo).subscribe(data=>{
          Swal.fire({
            position: 'center',
            icon: 'success',
            text: 'El correo se ha enviado a ' + listarCorreo.nombres,
            showConfirmButton: false,
            timer: 2000
          })
   })
  }
  
    loadDocente(user: Alumno): void {
     // alert(roles.idrol);
      
      this.InvitacionService.getDocenteId(user.iddocente).subscribe((data) => {
        this.listarCorreo = data;
        console.log(data);
      })
    }
// OBTENER ID PARA ENVIAR AL OTRO COMPONENTE
    obteneridDocente(doce: Docente){
      this.InvitacionService.obtenerid(doce)
    }
    
  }
