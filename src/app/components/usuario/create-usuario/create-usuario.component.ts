import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuarios/usuario.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioI } from 'src/app/models/Usuario';

@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styleUrls: ['./create-usuario.component.css']
})
export class CreateUsuarioComponent implements OnInit {

  public formulario: FormGroup = this.formBuilder.group(
    {
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required]]
    }
  )
  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    const formValue:UsuarioI = this.formulario.value;
    this.usuarioService.create(formValue).subscribe(
      ()=>{
        this.snackBar.open('Usuario creado correctamente...', 'ok', {duration: 500});
        this.router.navigateByUrl('/usuario');
      },
      err =>{
        this.snackBar.open('Error al crear el Usuario...', 'ERROR', {duration: 500});
      }
    )
  }

}
