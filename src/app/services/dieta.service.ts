import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DietaService {

  url='/api';
  constructor(private http:HttpClient) { }

  //get equipos
  getDieta()
  {
    return this.http.get(this.url);
  }
}


export interface Dieta{
  idDieta?:string;
  idCliente?:string;
  Nombre_Dieta?:string;
  Descripcion?:string;
  Inicio?:string;
  Fin?:string;
}
