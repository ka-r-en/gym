import { EditarUsuarioComponent } from './components/usuario/editar-usuario/editar-usuario.component';
import { AgregarUsuarioComponent } from './components/usuario/agregar-usuario/agregar-usuario.component';
import { AgregarDietaComponent } from './compnents/dieta/agregar-dieta/agregar-dieta.component';
import { EditarRutinaComponent } from './components/rutina/editar-rutina/editar-rutina.component';
import { AgregarRutinaComponent } from './components/rutina/agregar-rutina/agregar-rutina.component';
import { EditarRegistroComponent } from './components/registro/editar-registro/editar-registro.component';
import { AgregarRegistroComponent } from './components/registro/agregar-registro/agregar-registro.component';
import { EditarAvanceComponent } from './components/avance/editar-avance/editar-avance.component';
import { AgregarAvanceComponent } from './components/avance/agregar-avance/agregar-avance.component';
import { AvanceComponent } from './components/avance/avance.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarClienteComponent } from './components/cliente/agregar-cliente/agregar-cliente.component';
import { EditarClienteComponent } from './components/cliente/editar-cliente/editar-cliente.component';
import { RegistroComponent } from './components/registro/registro.component';
import { EntrenadorComponent } from './components/entrenador/entrenador.component';
import { RutinaComponent } from './components/rutina/rutina.component';
import { EjercicioComponent } from './components/ejercicio/ejercicio.component';
import { DietaComponent } from './components/dieta/dieta.component';
import { DietacompletadaComponent } from './components/dietacompletada/dietacompletada.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { LoginComponent } from './components/login/login.component';
import { AgregarEntrenadorComponent } from './components/entrenador/agregar-entrenador/agregar-entrenador.component';
import { EditarEntrenadorComponent } from './components/entrenador/editar-entrenador/editar-entrenador.component';
import { AgregarEjercicioComponent } from './components/ejercicio/agregar-ejercicio/agregar-ejercicio.component';
import { EditarEjercicioComponent } from './components/ejercicio/editar-ejercicio/editar-ejercicio.component';
import { EditarDietaComponent } from './components/dieta/editar-dieta/editar-dieta.component';
import { AgregarDietacompletadaComponent } from './components/dieta/agregar-dietacompletada/agregar-dietacompletada.component';
import { EditarDietacompletadaComponent } from './components/dieta/editar-dietacompletada/editar-dietacompletada.component';

const routes: Routes = [
  {path: '', redirectTo:'/cliente', pathMatch:'full'},
  {path: 'cliente', component:ClienteComponent},
  {path: 'agregar-cliente', component:AgregarClienteComponent},
  {path: 'editar-cliente', component:EditarClienteComponent},
  {path: '', redirectTo:'/avance', pathMatch:'full'},
  {path: 'avance', component:AvanceComponent},
  {path: 'agregar-avance', component:AgregarAvanceComponent},
  {path: 'editar-avance', component:EditarAvanceComponent},
  {path: '', redirectTo:'/registro', pathMatch:'full'},
  {path: 'registro', component:RegistroComponent},
  {path: 'agregar-registro', component:AgregarRegistroComponent},
  {path: 'editar-registro', component:EditarRegistroComponent},
  {path: '', redirectTo:'/entrenador', pathMatch:'full'},
  {path: 'entrenador', component:EntrenadorComponent},
  {path: 'agregar-entrenador', component:AgregarEntrenadorComponent},
  {path: 'editar-entrenador', component:EditarEntrenadorComponent},
  {path: '',redirectTo:'/rutina', pathMatch:'full'},
  {path: 'rutina', component:RutinaComponent},
  {path: 'agregar-rutina', component:AgregarRutinaComponent},
  {path: 'editar-rutina', component:EditarRutinaComponent},
  {path: '', redirectTo:'/ejercicio', pathMatch:'full'},
  {path: 'ejercicio', component:EjercicioComponent},
  {path: 'agregar-ejercicio', component:AgregarEjercicioComponent},
  {path: 'editar-ejercicio', component:EditarEjercicioComponent},
  {path: '', redirectTo:'/dieta', pathMatch:'full'},
  {path: 'dieta', component:DietaComponent},
  {path: 'agregar-dieta', component:AgregarDietaComponent},
  {path: 'editar-dieta', component:EditarDietaComponent},
  {path: '', redirectTo:'/dietacompletada', pathMatch:'full'},
  {path: 'dietacompletada', component:DietacompletadaComponent},
  {path: 'agregar-dietacompletada', component:AgregarDietacompletadaComponent},
  {path: 'editar-dietacompletada', component:EditarDietacompletadaComponent},
  {path: '', redirectTo:'/usuario', pathMatch:'full'},
  {path: 'usuario', component:UsuarioComponent},
  {path: 'agregar-usuario', component:AgregarUsuarioComponent},
  {path: 'editar-usuario', component:EditarUsuarioComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



