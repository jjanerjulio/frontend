import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EjemplarService } from 'src/app/services/ejemplares/ejemplar.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EjemplarI } from 'src/app/models/Ejemplar';

@Component({
  selector: 'app-create-ejemplar',
  templateUrl: './create-ejemplar.component.html',
  styleUrls: ['./create-ejemplar.component.css']
})
export class CreateEjemplarComponent implements OnInit {

  public formulario: FormGroup = this.formBuilder.group(
    {
      localizacion: ['', [Validators.required]],
      LibroId: ['', [Validators.required]]
    }
  )
  constructor(
    private formBuilder: FormBuilder,
    private ejemplarService: EjemplarService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    const formValue:EjemplarI = this.formulario.value;
    this.ejemplarService.create(formValue).subscribe(
      ()=>{
        this.snackBar.open('Ejemplar creado correctamente...', 'ok', {duration: 500});
        this.router.navigateByUrl('/ejemplar');
      },
      err =>{
        this.snackBar.open('Error al crear el Ejemplar...', 'ERROR', {duration: 500});
      }
    )
  }

}
