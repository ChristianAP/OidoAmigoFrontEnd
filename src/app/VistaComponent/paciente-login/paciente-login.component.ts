import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Paciente } from 'src/app/Modelo/paciente';
import { AuthPacienteService } from 'src/app/Service/auth-paciente.service';

@Component({
  selector: 'app-paciente-login',
  templateUrl: './paciente-login.component.html',
  styleUrls: ['./paciente-login.component.css']
})
export class PacienteLoginComponent implements OnInit {
  DNIFormControl = new FormControl('', [
    Validators.required,
  ]);
  signin: FormGroup = new FormGroup({
    DNI: new FormControl('', [Validators.required, Validators.max(8) ]),
    password: new FormControl('', [Validators.required, Validators.min(3) ])
  });
  hide = true;
  get DNIInput() { return this.signin.get('DNI'); }
  get passwordInput() { return this.signin.get('password'); } 
   //////////////////////////////////
   persona = new Paciente();
   user!: Paciente;
   constructor( private authService: AuthPacienteService, private router: Router, private toastrService: ToastrService) { }
 
   ngOnInit(): void {
   }
 
   signIn() {
     this.authService.signIn(this.persona).subscribe(
       res => {
         sessionStorage.setItem('tokenPaciente', res.accessToken);
         let datos = JSON.parse(atob(res.accessToken.split(".")[1]));
         this.user = new Paciente();
         this.user.idpersona = datos.data_paciente.idpersona;
         this.user.nombre = datos.data_paciente.nombre;
         this.user.apellido = datos.data_paciente.apellido;
         this.user.correo = datos.data_paciente.correo;
         this.user.genero = datos.data_paciente.genero;
         this.user.dnipasaporte = datos.data_paciente.dnipasaporte;
         this.user.celular = datos.data_paciente.celular;
         this.user.ciudad = datos.data_paciente.ciudad;
         this.user.idrol = datos.data_paciente.idrol;
         this.user.nombre_rol = datos.data_paciente.nombre_rol;
         this.user.codigo_paciente = datos.data_paciente.codigo_paciente;
         this.user.edad = datos.data_paciente.edad;
         this.user.direccion = datos.data_paciente.direccion;
         this.user.idpsicologo = datos.data_paciente.idpsicologo;
         this.user.sesion1 = datos.data_paciente.sesion1;
         this.user.sesion2 = datos.data_paciente.sesion2;
         this.user.sesion3 = datos.data_paciente.sesion3;
         sessionStorage.setItem('data_paciente', JSON.stringify(this.user));
         this.router.navigate(['/PSesiones']);
         console.log(this.user);
         //Swal.fire({title: 'Singin!',text: 'Hi '+ this.usuarioData.nombre +' Grate to have you back...!',icon: 'success',confirmButtonText: 'Ok',timer: 3500,})
         
         this.toastrService.success('Hi '+this.usuarioData.nombre +' WELCOME ...!');
       },
       err =>{
         this.toastrService.error('Sorry, invalid data');
         console.log(err);
       }
     )
   }
 
   public get usuarioData(): Paciente {
     if (this.user != null) {
       return this.user;
     } else if (this.user == null && sessionStorage.getItem("data_paciente") != null) {
       this.user == JSON.parse(sessionStorage.getItem('data_paciente') || '{}') as Paciente;
       return this.user;
     }
     return new Paciente();
   }
}
