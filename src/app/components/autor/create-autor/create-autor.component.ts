import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutorService } from 'src/app/services/autores/autor.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AutorI } from 'src/app/models/Autor';

@Component({
  selector: 'app-create-autor',
  templateUrl: './create-autor.component.html',
  styleUrls: ['./create-autor.component.css']
})
export class CreateAutorComponent implements OnInit {

  public formulario: FormGroup = this.formBuilder.group(
    {
      nombre: ['', [Validators.required]],
    }
  )
  constructor(
    private formBuilder: FormBuilder,
    private autorService: AutorService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    const formValue:AutorI = this.formulario.value;
    this.autorService.create(formValue).subscribe(
      ()=>{
        this.snackBar.open('Autor creado correctamente...', 'ok', {duration: 500});
        this.router.navigateByUrl('/autor');
      },
      err =>{
        this.snackBar.open('Error al crear el autor...', 'ERROR', {duration: 500});
      }
    )
  }

}
