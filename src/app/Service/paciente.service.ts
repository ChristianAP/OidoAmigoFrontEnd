import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estate } from '../Modelo/estate';
import { GReporte } from '../Modelo/GReporte';
import { Opcion } from '../Modelo/opcion';
import { PacienteLogin } from '../Modelo/pacienteLogin';
import { PacienteView } from '../Modelo/pacienteView';
import { Reporte } from '../Modelo/reporte';
import { Sesion } from '../Modelo/sesion';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http: HttpClient) { }
  
 
  private Url = 'http://localhost:3000/paciente/'
  ///////// OBTENER PACIENTE
  obtenerPaciente(paciente: PacienteView){
    return this.http.post<PacienteView[]>(this.Url, paciente); 
  }
  obtenerSesion1(idpaciente: number): Observable<Sesion[]> {
    return this.http.get<Sesion[]>(this.Url + 'sesion1/' + idpaciente);
  }
  obtenerSesion2(idpaciente: number): Observable<Sesion[]> {
    return this.http.get<Sesion[]>(this.Url + 'sesion2/' + idpaciente);
  }
  obtenerSesion3(idpaciente: number): Observable<Sesion[]> {
    return this.http.get<Sesion[]>(this.Url + 'sesion3/' + idpaciente);
  }

  getSesion(id: number): Observable<Sesion[]> {
    return this.http.get<Sesion[]>(this.Url + 'sesionID/' + id);
  }
  getReporte(id: number): Observable<GReporte[]> {
    return this.http.get<GReporte[]>(this.Url + 'reporteID/' + id);
  }
  validar(id: number): Observable<PacienteView[]> {
    return this.http.get<PacienteView[]>(this.Url + 'validar/' + id);
  }

  ///////// CREAR SESION
  createSesion(sesion: Sesion){
    return this.http.put<Sesion[]>(this.Url+'/createSesion/' +sesion.idreporte, sesion); 
  }
  ///////// CREAR REPORTE 
  crearReportes(greporte: GReporte){
    return this.http.put<GReporte[]>(this.Url+'/createReporte/' +greporte.idreporte, greporte); 
  }


  ////////////////////////////////// REPORTE SESION
  private url2 = 'http://localhost:3000/reporte/'
  reporte(): Observable<Reporte[]> {
    return this.http.get<Reporte[]>(this.url2 );
  }
   
  ////////////////////////////////// REPORTE SESION
  private url3 = 'http://localhost:3000/usuario/opciones/'
  opciones(id:number): Observable<Opcion[]> {
    return this.http.get<Opcion[]>(this.url3 + id );
  }

  ////////////////////////////////// REPORTE FINAL
  private url4 = 'http://localhost:3000/reporte/reportFinal/'
  reporteFinal(id:number): Observable<Reporte[]> {
    return this.http.get<Reporte[]>(this.url4 + id);
  }

  ///////// CASO FINALIZADO
  finalizar(repo : Reporte){
    console.log(repo.idpersona, repo.idpsicologo);
    return this.http.post<Reporte[]>(this.Url+'complete/', repo); 
  }

  ///////// CASO TRUNCO
  trunco(repo : Reporte){
    return this.http.post<Reporte[]>(this.Url+'trunco/', repo); 
  }
  ////////////////////////////// REPORTE ////////////////////
  private report = 'http://localhost:3000/reporte/'
  estateComplete(): Observable<Estate[]> {
    return this.http.get<Estate[]>(this.report +'completado/' );
  }
  estateTrunco(): Observable<Estate[]> {
    return this.http.get<Estate[]>(this.report + 'trunco/');
  }
  estateEspera(): Observable<Estate[]> {
    return this.http.get<Estate[]>(this.report + 'espera/');
  }
  estateProceso(): Observable<Estate[]> {
    return this.http.get<Estate[]>(this.report + 'progreso/');
  }
  
}
