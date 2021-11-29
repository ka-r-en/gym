import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DietaCompletadaService {

  url='/api';
  constructor(private http:HttpClient) { }

  //get equipos
  getDietaCompletada()
  {
    return this.http.get(this.url);
  }
}


export interface DietaCompletada{
  idDietaCompletada?:string;
  idDieta?:string;
  Informe?:string;
}
