import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Persona } from '../Modelo/persona';
import { User } from '../Modelo/user';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:3000/auth/'
  private Url = 'http://localhost:3000/api/users'
  constructor(private http: HttpClient, private router: Router) { }

  private docente! : User;

  signIn(user:User) {
    
    return this.http.post<any>(this.url, user);
  }

  datauser(persona:Persona) {
    
    return this.http.post<Persona>(this.url, persona);
  }


  loggedIn(){
    return !!sessionStorage.getItem('token');
  }

  getToken(){
    return sessionStorage.getItem('token');
  }

  getdataUser(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.Url+'/');
  }

  public get users() :User{
    if(this.docente!=null){
         return this.docente;
    }else if (this.docente == null && sessionStorage.getItem("dato_login")!=null) {
      this.docente == JSON.parse(sessionStorage.getItem('dato_login') || '{}') as User;
      return this.docente;
    }
    return new User();
  }

}
