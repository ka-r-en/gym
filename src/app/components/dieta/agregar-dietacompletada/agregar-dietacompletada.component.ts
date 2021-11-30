import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-dietacompletada',
  templateUrl: './agregar-dietacompletada.component.html',
  styleUrls: ['./agregar-dietacompletada.component.css']
})
export class AgregarDietacompletadaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  enviarDatos():any {
    console.log("Me presionaste");
  }
}
