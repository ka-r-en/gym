import { Component, OnInit } from '@angular/core';
import {ClienteService, Cliente } from '../../services/cliente.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

   //variable
   ListarCliente:Cliente[]=[];

  constructor(private ClienteService:ClienteService) { }

  ngOnInit(): void {
   this.listarCliente();
  }

  listarCliente()
  {
    this.ClienteService.getCliente().subscribe(
      res=> {
        console.log(res)
        this.ListarCliente=<any>res;
      },
      err => console.log(err)
    );
  }
}
