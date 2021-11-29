import { AvanceComponent } from './components/avance/avance.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarClienteComponent } from './components/cliente/agregar-cliente/agregar-cliente.component';
import { ModificarClienteComponent } from './components/cliente/modificar-cliente/modificar-cliente.component';
import { RegistroComponent } from './components/registro/registro.component';
import { EntrenadorComponent } from './components/entrenador/entrenador.component';
import { RutinaComponent } from './components/rutina/rutina.component';
import { EjercicioComponent } from './components/ejercicio/ejercicio.component';
import { DietaComponent } from './components/dieta/dieta.component';
import { DietacompletadaComponent } from './components/dietacompletada/dietacompletada.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
  {path: '', redirectTo:'/cliente', pathMatch:'full'},
  {path: 'cliente', component:ClienteComponent},
  {path: 'add', component:AgregarClienteComponent},
  {path: 'edit', component:ModificarClienteComponent},
  {path: 'avance', component:AvanceComponent},
  {path: '', redirectTo:'/registro', pathMatch:'full'},
  {path: 'registro', component:RegistroComponent},
  {path: '', redirectTo:'/entrenador', pathMatch:'full'},
  {path: 'entrenador', component:EntrenadorComponent},
  {path: '',redirectTo:'/rutina', pathMatch:'full'},
  {path: 'rutina', component:RutinaComponent},
  {path: '', redirectTo:'/ejercicio', pathMatch:'full'},
  {path: 'ejercicio', component:EjercicioComponent},
  {path: '', redirectTo:'/dieta', pathMatch:'full'},
  {path: 'dieta', component:DietaComponent},
  {path: '', redirectTo:'/dietacompletada', pathMatch:'full'},
  {path: 'dietacompletada', component:DietacompletadaComponent},
  {path: '', redirectTo:'/usuario', pathMatch:'full'},
  {path: 'usuario', component:UsuarioComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
