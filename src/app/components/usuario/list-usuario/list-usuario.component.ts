import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioI } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css']
})
export class ListUsuarioComponent implements OnInit {

  public usuarios: UsuarioI[] = []
  public displayedColumns: string[] = ["id", "nombre", "apellido", "direccion", "telefono", "Acciones"]
    constructor(
      private usuarioService:UsuarioService,
      private router: Router
    ) { }
  
    ngOnInit(): void {
      this.mostrarusuario()
    }
    mostrarusuario() {
      this.usuarioService.getAllUsuario()
        .subscribe({
          next: (data) => {
            this.usuarios = data.usuario
            console.log(this.usuarios)
          }
        })
    }

}
