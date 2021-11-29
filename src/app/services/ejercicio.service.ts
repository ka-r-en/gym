import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {

  url='/api';
  constructor(private http:HttpClient) { }

  //get equipos
  getEjercicio()
  {
    return this.http.get(this.url);
  }
}


export interface Ejercicio{
  idEjercicio?:string;
  idRutina?:string;
  idEntrenador?:string;
  idCliente?:string;
  Descripcion_Ej?:string;
}
