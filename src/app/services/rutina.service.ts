import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class RutinaService {

  url='/api';
  constructor(private http:HttpClient) { }

  //get equipos
  getRutina()
  {
    return this.http.get(this.url);
  }
}


export interface Avance{
  idRutina?:string;
  idEntrenador?:string;
  idCliente?:string;
  Nombre_Rutina?:string;
  Dia?:string;
  Descripcion?:string;
}
