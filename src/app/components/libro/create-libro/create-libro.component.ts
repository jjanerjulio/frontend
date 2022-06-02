import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LibroService } from 'src/app/services/libros/libro.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LibroI } from 'src/app/models/Libro';


@Component({
  selector: 'app-create-libro',
  templateUrl: './create-libro.component.html',
  styleUrls: ['./create-libro.component.css']
})
export class CreateLibroComponent implements OnInit {

  public formulario: FormGroup = this.formBuilder.group(
    {
      titulo: ['', [Validators.required]],
      numero_pag: ['', [Validators.required]],
      editorial: ['', [Validators.required]],
      ISBN: ['', [Validators.required]]
    }
  )
  constructor(
    private formBuilder: FormBuilder,
    private libroService: LibroService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    const formValue:LibroI = this.formulario.value;
    this.libroService.create(formValue).subscribe(
      ()=>{
        this.snackBar.open('Libro creado correctamente...', 'ok', {duration: 500});
        this.router.navigateByUrl('/libro');
      },
      err =>{
        this.snackBar.open('Error al crear el libro...', 'ERROR', {duration: 500});
      }
    )
  }
}
