import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-entrenador',
  templateUrl: './agregar-entrenador.component.html',
  styleUrls: ['./agregar-entrenador.component.css']
})
export class AgregarEntrenadorComponent implements OnInit {
  formularioDeEntrenadores:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private ruteador:Router
  )}
    this.formularioDeEntrenadores=this.formulario.group({
      IdEntrenador:[''],
      IdCliente:[''],
      Nombre:[''],
      Sexo:[''],
      Experiencia:[''],
      Telefono:['']
    })
   }
  

  ngOnInit(): void {
  }
  enviarDatos():any {
    console.log("Me presionaste");
    console.log(this.formularioDeEntrenadores.value);
    
    this.ruteador.navigateByUrl('/entrenador');
  }
}
