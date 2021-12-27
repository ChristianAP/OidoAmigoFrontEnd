import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Area } from '../Modelo/area';
import { Solicitud } from '../Modelo/solicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor(private http:HttpClient) { }
  Url = 'http://localhost:3000/solicitud'

  ///////// CREAR SOLICITUD
  enviarSolicitud(solicitud: Solicitud){
    return this.http.post<Solicitud[]>(this.Url+'/', solicitud); 
  }
  ///////// LISTAR SOLICITUD
  listarArea(): Observable<Area[]> {
    return this.http.get<Area[]>(this.Url + '/area');
  }
}
