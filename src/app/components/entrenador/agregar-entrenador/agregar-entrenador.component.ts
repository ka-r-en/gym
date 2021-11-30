import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-entrenador',
  templateUrl: './agregar-entrenador.component.html',
  styleUrls: ['./agregar-entrenador.component.css']
})
export class AgregarEntrenadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  enviarDatos():any {
    console.log("Me presionaste");
  }
}
