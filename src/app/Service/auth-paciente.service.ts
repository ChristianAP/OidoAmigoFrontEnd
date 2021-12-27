import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PacienteLogin } from '../Modelo/pacienteLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthPacienteService {
  private url = 'http://localhost:3000/authPaciente/'
  private Url = 'http://localhost:3000/api/users'
  constructor(private http: HttpClient, private router: Router) { }

  private paciente! : PacienteLogin;

  signIn(user:PacienteLogin) {  
    
    return this.http.post<any>(this.url, user);
  }

  datauser(persona:PacienteLogin) {
    
    return this.http.post<PacienteLogin>(this.url, persona);
  }


  loggedIn(){
    return !!sessionStorage.getItem('tokenPaciente');
  }

  getToken(){
    return sessionStorage.getItem('tokenPaciente');
  }

  getdataUser(): Observable<PacienteLogin[]>{
    return this.http.get<PacienteLogin[]>(this.Url+'/');
  }

  public get users() :PacienteLogin{
    if(this.paciente!=null){
         return this.paciente;
    }else if (this.paciente == null && sessionStorage.getItem("data_paciente")!=null) {
      this.paciente == JSON.parse(sessionStorage.getItem('data_paciente') || '{}') as PacienteLogin;
      return this.paciente;
    }
    return new PacienteLogin();
  }

}
