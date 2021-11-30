import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-ejercicio',
  templateUrl: './agregar-ejercicio.component.html',
  styleUrls: ['./agregar-ejercicio.component.css']
})
export class AgregarEjercicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   enviarDatos():any {
    console.log("Me presionaste");
  }
}
