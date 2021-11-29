import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { AgregarClienteComponent } from './components/cliente/agregar-cliente/agregar-cliente.component';
import { ModificarClienteComponent } from './components/cliente/modificar-cliente/modificar-cliente.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AvanceComponent } from './components/avance/avance.component';
import { RegistroComponent } from './components/registro/registro.component';
import { EntrenadorComponent } from './components/entrenador/entrenador.component';
import { RutinaComponent } from './components/rutina/rutina.component';
import { EjercicioComponent } from './components/ejercicio/ejercicio.component';
import { DietaComponent } from './components/dieta/dieta.component';
import { DietacompletadaComponent } from './components/dietacompletada/dietacompletada.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    AgregarClienteComponent,
    ModificarClienteComponent,
    AvanceComponent,
    RegistroComponent,
    EntrenadorComponent,
    RutinaComponent,
    EjercicioComponent,
    DietaComponent,
    DietacompletadaComponent,
    UsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
