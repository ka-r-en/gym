import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-avance',
  templateUrl: './agregar-avance.component.html',
  styleUrls: ['./agregar-avance.component.css']
})
export class AgregarAvanceComponent implements OnInit {
  formularioDeClientes:FormGroup;

  constructor({
  public formulario:FormBuilder,
  private ruteador:Router
  ) }
  
  this.formularioDeAvances=this.formulario.group({
    IdCliente:[''],
      Nombre:[''],
      Edad:[''],
      Sexo:[''],
      Peso_inicial:[''],
      Peso_meta:[''],
      Talla_inicial:[''],
      Talla_meta:['']
    })
   }

  ngOnInit(): void {
  }
  enviarDatos():any {
    console.log("Me presionaste");
    
    this.ruteador.navigateByUrl('/avance');
  }
}
