import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class EntrenadorService {

  url='/api';
  constructor(private http:HttpClient) { }

  //get equipos
  getEntrenador()
  {
    return this.http.get(this.url);
  }
}


export interface Avance{
  idEntrenador?:string;
  idCliente?:string;
  Nombre?:string;
  Sexo?:string;
  Experiencia?:string;
  Telefono?:string;
}
