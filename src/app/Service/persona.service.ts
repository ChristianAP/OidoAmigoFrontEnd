import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../Modelo/persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  Url = 'http://localhost:3000/usuario/prueba/'
  constructor(private http: HttpClient) { }

  getAllPrueba(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.Url);
  }
}
