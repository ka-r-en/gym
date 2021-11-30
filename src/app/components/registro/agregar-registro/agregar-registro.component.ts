import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-registro',
  templateUrl: './agregar-registro.component.html',
  styleUrls: ['./agregar-registro.component.css']
})
export class AgregarRegistroComponent implements OnInit {
   formularioDeRegistro:FormGroup;

  constructor(
   public formulario:FormBuilder,
   private ruteador:Router
  ) { 
     this.formularioDeRegistro=this.formulario.group({
      IdProgreso:[''],
      IdCliente:[''],
      Fecha:[''],
      Peso:[''],
      Talla:['']
    })
   }

  ngOnInit(): void {
  }
   enviarDatos():any {
    console.log("Me presionaste");
     console.log(this.formularioDeRegistro.value);
     
     this.ruteador.navigateByUrl('/Registro');
  }

}
