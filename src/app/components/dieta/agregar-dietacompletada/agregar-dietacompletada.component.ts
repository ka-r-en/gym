import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-dietacompletada',
  templateUrl: './agregar-dietacompletada.component.html',
  styleUrls: ['./agregar-dietacompletada.component.css']
})
export class AgregarDietacompletadaComponent implements OnInit {
formularioDeDietasCompletadas:FormGroup;
  
  constructor({
    public formulario:FormBuilder,
    private ruteador:Router
  )  }

  this.formularioDeAvances=this.formulario.group({
      IdDietaCompletada:[''],
      IdDieta:[''],
      IdCliente:[''],
      Informe:['']
    })
   }
  
  ngOnInit(): void {
  }
  enviarDatos():any {
    console.log("Me presionaste");
    console.log(this.formularioDeAvances.value);
    
    this.ruteador.navigateByUrl('/DietaCompletada');
  }
}
