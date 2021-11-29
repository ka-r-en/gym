import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url='/api';
  constructor(private http:HttpClient) { }

  //get equipos
  getCliente()
  {
    return this.http.get(this.url);
  }
}


export interface Cliente{
  idCliente?:string;
  Nombre?:string;
  Edad?:string,
  Sexo?:string,
  Peso_inicial?:string,
  Peso_meta?:string;
  Talla_inicial?:string;
  Talla_meta?:string;
}

