import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/layaut/nav/nav.component';
import { ListLibroComponent } from './components/libro/list-libro/list-libro.component';
import { ListAutorComponent } from './components/autor/list-autor/list-autor.component';
import { ListEscribirComponent } from './components/escribir/list-escribir/list-escribir.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CreateLibroComponent } from './components/libro/create-libro/create-libro.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CreateEscribirComponent } from './components/escribir/create-escribir/create-escribir.component';
import { CreateAutorComponent } from './components/autor/create-autor/create-autor.component';
import { CreateEjemplarComponent } from './components/ejemplar/create-ejemplar/create-ejemplar.component';
import { ListEjemplarComponent } from './components/ejemplar/list-ejemplar/list-ejemplar.component';
import { ListUsuarioComponent } from './components/usuario/list-usuario/list-usuario.component';
import { CreateUsuarioComponent } from './components/usuario/create-usuario/create-usuario.component';
import { ListPrestarComponent } from './components/prestar/list-prestar/list-prestar.component';
import { CreatePrestarComponent } from './components/prestar/create-prestar/create-prestar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListLibroComponent,
    ListAutorComponent,
    ListEscribirComponent,
    CreateLibroComponent,
    CreateEscribirComponent,
    CreateAutorComponent,
    CreateEjemplarComponent,
    ListEjemplarComponent,
    ListUsuarioComponent,
    CreateUsuarioComponent,
    ListPrestarComponent,
    CreatePrestarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
