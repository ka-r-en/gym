import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {
  formularioDeClientes:FormGroup;

  constructor({
    public formulario:FormBuilder,
    private ruteador:Router
  )  }
  
  this.formularioDeCllientes=this.formulario.group({
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
    
    this.ruteador.navigateByUrl('/cliente');
    
  }

}
