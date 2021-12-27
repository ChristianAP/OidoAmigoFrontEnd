import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/persona';
import { User } from 'src/app/Modelo/user';
import { AuthService } from 'src/app/Service/auth.service';
import Swal from 'sweetalert2';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
  ]);
  signin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required ]),
    password: new FormControl('', [Validators.required, Validators.min(3) ])
  });
  hide = true;
  get emailInput() { return this.signin.get('email'); }
  get passwordInput() { return this.signin.get('password'); } 
  //////////////////////////////////
  persona = new User();
  user!: Persona;
  constructor( private authService: AuthService, private router: Router, private toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  signIn() {
    this.authService.signIn(this.persona).subscribe(
      res => {
        sessionStorage.setItem('token', res.accessToken);
        let datos = JSON.parse(atob(res.accessToken.split(".")[1]));
        this.user = new Persona();
        this.user.idpersona = datos.dato_login.idpersona;
        this.user.nombre = datos.dato_login.nombre;
        this.user.apellido = datos.dato_login.apellido;
        this.user.correo = datos.dato_login.correo;
        this.user.idrol = datos.dato_login.idrol;
        this.user.nombre_rol = datos.dato_login.nombre_rol;
        this.user.codigo = datos.dato_login.codigo;
        sessionStorage.setItem('dataus', JSON.stringify(this.user));
        this.router.navigate(['/template']);
        console.log(this.user);
        //Swal.fire({title: 'Singin!',text: 'Hi '+ this.usuarioData.nombre +' Grate to have you back...!',icon: 'success',confirmButtonText: 'Ok',timer: 3500,})
        
        this.toastrService.success('Hi '+this.usuarioData.nombre +' Grate to have you back...!');
      },
      err =>{
        this.toastrService.error('Sorry, Username or Password Incorrect');
        console.log(err);
      }
    )
  }

  public get usuarioData(): Persona {
    if (this.user != null) {
      return this.user;
    } else if (this.user == null && sessionStorage.getItem("dataus") != null) {
      this.user == JSON.parse(sessionStorage.getItem('dataus') || '{}') as Persona;
      return this.user;
    }
    return new Persona();
  }

}
