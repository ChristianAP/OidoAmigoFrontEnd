import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Egresado } from '../Modelo/egresado';
import { EgresadoUP } from '../Modelo/egresadoUp';
import { Estudiante } from '../Modelo/estudiante';
import { EstudianteUP } from '../Modelo/estudianteUP';
import { ObtPsico } from '../Modelo/obtPsico';
import { PersonaUP } from '../Modelo/personaUp';
import { Psicologo } from '../Modelo/psicologo';

@Injectable({
  providedIn: 'root'
})
export class PsicologoService {

  constructor(private http:HttpClient) { }
  Url = 'http://localhost:3000/usuario'
  psico = 'http://localhost:3000/authPaciente/list/'
  /////////////////////////////////////////// OBTENER DATOS PSICOLOGOS
  obtenerPsicologo(id:number): Observable<ObtPsico[]> {
    return this.http.get<ObtPsico[]>(this.psico +id);
  }
  ///////// CREAR EGRESADO
  createEgresado(psicologo: Psicologo){
    return this.http.post<Psicologo[]>(this.Url+'/createEgresado/', psicologo); 
  }
  ///////// CREAR ESTUDIANTE
  createEstudiante(psicologo: Psicologo){
    return this.http.post<Psicologo[]>(this.Url+'/createEstudiante/', psicologo); 
  }
  /////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////       EGRESADO         ///////////////////////////////////
  ///////// LISTAR EGRESADO
  getEgresado(): Observable<Egresado[]> {
    return this.http.get<Egresado[]>(this.Url + '/listEgresado/');
  }
  ///////// LISTAR EGRESADO por ID
  getEgresadoID(id:number): Observable<Egresado[]> {
    return this.http.get<Egresado[]>(this.Url+ '/listEgresadoID/' +id);
  }
  ///////// MODIFICAR EGRESADO - PERSONA 
  updateEgresadoPer(id:number, datosPer: PersonaUP): Observable<PersonaUP[]> {
    return this.http.put<PersonaUP[]>(this.Url+ '/updateEgresadoPer/' +id, datosPer);
  }
  ///////// MODIFICAR EGRESADO 
  updateEgresado(id:number, datosEg: EgresadoUP): Observable<EgresadoUP[]> {
    return this.http.put<EgresadoUP[]>(this.Url+ '/updateEgresado/' + id, datosEg);
  }
  ///////// ELIMINAR EGRESADO
  deleteEgresado(egresado:Egresado){
    return this.http.delete<Egresado>(this.Url+'/deleteEgresado/'+egresado.idpersona);
  } 
  /////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////       ESTUDIANTE       ///////////////////////////////////
  ///////// LISTAR ESTUDIANTES
  getEstudiantes(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(this.Url + '/listEstudiante/');
  }
  ///////// LISTAR ESTUDIANTE por ID
  getEstudianteID(id:number): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(this.Url+ '/listEstudianteID/' +id);
  }
  ///////// MODIFICAR ESTUDIANTE - PERSONA 
  updateEstudiantePer(id:number, datosPer: PersonaUP): Observable<PersonaUP[]> {
    return this.http.put<PersonaUP[]>(this.Url+ '/updateEstudiantePer/' +id, datosPer);
  }
  ///////// MODIFICAR ESTUDIANTE 
  updateEstudiante(id:number, datosEs: EstudianteUP): Observable<EstudianteUP[]> {
    return this.http.put<EstudianteUP[]>(this.Url+ '/updateEstudiante/' + id, datosEs);
  }
  ///////// ELIMINAR ESTUDIANTE
  deleteEstudiante(estudiante:Estudiante){
    return this.http.delete<Egresado>(this.Url+'/deleteEstudiante/'+estudiante.idpersona);
  }
}
