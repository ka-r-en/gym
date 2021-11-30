import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-ejercicio',
  templateUrl: './agregar-ejercicio.component.html',
  styleUrls: ['./agregar-ejercicio.component.css']
})
export class AgregarEjercicioComponent implements OnInit {
  formularioDeEjercicios:FormGroup;

  constructor( { 
    public formulario:FormBuilder,
    private ruteador:Router
    ) {
    
    this.formularioDeEjercicios=this.formulario.group({
      IdEjercicio:[''],
      IdRutina:[''],
      IdEntrenador:[''],
      IdCliente:[''],
      Descripcion:['']
    })
   }

  ngOnInit(): void {
  }
   enviarDatos():any {
    console.log("Me presionaste");
     console.log(this.formularioDeEjercicio.value);
     
     this.ruteador.navigateByUrl('/ejercicio');
     
  }
}
