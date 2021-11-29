import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url='/api';
  constructor(private http:HttpClient) { }

  //get equipos
  getUsuario()
  {
    return this.http.get(this.url);
  }
}


export interface Usuario{
  idUsuario?:string;
  Nombre?:string;
  Rol?:string;
  Password?:string;
  Telefono?:string;
}
