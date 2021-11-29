import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { AgregarClienteComponent } from './components/cliente/agregar-cliente/agregar-cliente.component';


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
import { LoginComponent } from './components/login/login.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import { EditarClienteComponent } from './components/cliente/editar-cliente/editar-cliente.component';
import { AgregarAvanceComponent } from './components/avance/agregar-avance/agregar-avance.component';
import { EditarAvanceComponent } from './components/avance/editar-avance/editar-avance.component';
import { AgregarRegistroComponent } from './components/registro/agregar-registro/agregar-registro.component';
import { EditarRegistroComponent } from './components/registro/editar-registro/editar-registro.component';
import { AgregarEntrenadorComponent } from './components/entrenador/agregar-entrenador/agregar-entrenador.component';
import { EditarEntrenadorComponent } from './components/entrenador/editar-entrenador/editar-entrenador.component';
import { AgregarRutinaComponent } from './components/rutina/agregar-rutina/agregar-rutina.component';
import { EditarRutinaComponent } from './components/rutina/editar-rutina/editar-rutina.component';
import { AgregarEjercicioComponent } from './components/ejercicio/agregar-ejercicio/agregar-ejercicio.component';
import { EditarEjercicioComponent } from './components/ejercicio/editar-ejercicio/editar-ejercicio.component';
import { AgregarDietaComponent } from './compnents/dieta/agregar-dieta/agregar-dieta.component';
import { EditarDietaComponent } from './components/dieta/editar-dieta/editar-dieta.component';
import { AgregarDietacompletadaComponent } from './components/dieta/agregar-dietacompletada/agregar-dietacompletada.component';
import { EditarDietacompletadaComponent } from './components/dieta/editar-dietacompletada/editar-dietacompletada.component';
import { AgregarUsuarioComponent } from './components/usuario/agregar-usuario/agregar-usuario.component';
import { EditarUsuarioComponent } from './components/usuario/editar-usuario/editar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    AgregarClienteComponent,
    EditarClienteComponent,
    AvanceComponent,
    RegistroComponent,
    EntrenadorComponent,
    RutinaComponent,
    EjercicioComponent,
    DietaComponent,
    DietacompletadaComponent,
    UsuarioComponent,
    LoginComponent,
    EditarClienteComponent,
    AgregarAvanceComponent,
    EditarAvanceComponent,
    AgregarRegistroComponent,
    EditarRegistroComponent,
    AgregarEntrenadorComponent,
    EditarEntrenadorComponent,
    AgregarRutinaComponent,
    EditarRutinaComponent,
    AgregarEjercicioComponent,
    EditarEjercicioComponent,
    AgregarDietaComponent,
    EditarDietaComponent,
    AgregarDietacompletadaComponent,
    EditarDietacompletadaComponent,
    AgregarUsuarioComponent,
    EditarUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
