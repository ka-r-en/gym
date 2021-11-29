import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  url='/api';
  constructor(private http:HttpClient) { }

  //get equipos
  getRegistro()
  {
    return this.http.get(this.url);
  }
}


export interface Registro{
  idProgreso?:string;
  idCliente?:string;
  Fecha?:string,
  Peso?:string,
  Talla?:string,
}

