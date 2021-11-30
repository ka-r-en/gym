import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-rutina',
  templateUrl: './agregar-rutina.component.html',
  styleUrls: ['./agregar-rutina.component.css']
})
export class AgregarRutinaComponent implements OnInit {
  formularioDeRutinas:FormGroup;

  constructor(
  public formulario:FormBuilder,
    private ruteador:Router
  ) { 
    
    this.formularioDeRutinas=this.formulario.group({
      IdRutina:[''],
      IdEntrenador:[''],
      IdCliente:[''],
      Nombre_rutina:[''],
      Dia:[''],
      Descripcion:['']
    })
   }

  ngOnInit(): void {
  }
   enviarDatos():any {
    console.log("Me presionaste");
     console.log(this.formularioDeRutinas.value);

    this.ruteador.navigateByUrl('/rutina');
     
  }
}
