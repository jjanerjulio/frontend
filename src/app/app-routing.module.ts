import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListLibroComponent } from './components/libro/list-libro/list-libro.component';
import { ListAutorComponent } from './components/autor/list-autor/list-autor.component';
import { ListEscribirComponent } from './components/escribir/list-escribir/list-escribir.component';
import { CreateLibroComponent } from './components/libro/create-libro/create-libro.component';
import { CreateEscribirComponent } from './components/escribir/create-escribir/create-escribir.component';
import { CreateAutorComponent } from './components/autor/create-autor/create-autor.component';
import { ListEjemplarComponent} from './components/ejemplar/list-ejemplar/list-ejemplar.component'
import { CreateEjemplarComponent } from './components/ejemplar/create-ejemplar/create-ejemplar.component'
import { CreateUsuarioComponent } from './components/usuario/create-usuario/create-usuario.component';
import { ListUsuarioComponent } from './components/usuario/list-usuario/list-usuario.component';
import {  ListPrestarComponent } from './components/prestar/list-prestar/list-prestar.component'
import { CreatePrestarComponent } from './components/prestar/create-prestar/create-prestar.component'

const routes: Routes = [
  {
    path: "libro",
    component: ListLibroComponent
  },
  {
    path: "crearlibro",
    component: CreateLibroComponent
  },
  {
    path: "autor",
    component: ListAutorComponent
  },
  {
    path: "crearautor",
    component: CreateAutorComponent
  },
  {
    path: "escribir",
    component: ListEscribirComponent
  },
  {
    path: "crearescribir",
    component: CreateEscribirComponent
  },
  {
    path: "ejemplar",
    component: ListEjemplarComponent
  },
  {
    path: "createjemplar",
    component: CreateEjemplarComponent
  },
  {
    path: "usuario",
    component: ListUsuarioComponent
  },
  {
    path: "createusuario",
    component: CreateUsuarioComponent
  },
  {
    path: "prestar",
    component: ListPrestarComponent
  },
  {
    path: "createprestar",
    component: CreatePrestarComponent
  },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
