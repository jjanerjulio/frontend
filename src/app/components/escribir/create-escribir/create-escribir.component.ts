import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EscribirService } from 'src/app/services/escritos/escribir.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EscribirI } from 'src/app/models/Escribir';

@Component({
  selector: 'app-create-escribir',
  templateUrl: './create-escribir.component.html',
  styleUrls: ['./create-escribir.component.css']
})
export class CreateEscribirComponent implements OnInit {

  public formulario: FormGroup = this.formBuilder.group(
    {
      Fecha: ['', [Validators.required]],
      AutorId: ['', [Validators.required]],
      LibroId: ['', [Validators.required]],
    }
  )
  constructor(
    private formBuilder: FormBuilder,
    private escribirService: EscribirService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    const formValue:EscribirI = this.formulario.value;
    this.escribirService.create(formValue).subscribe(
      ()=>{
        this.snackBar.open('Escribir creado correctamente...', 'ok', {duration: 500});
        this.router.navigateByUrl('/escribir');
      },
      err =>{
        this.snackBar.open('Error al crear el esccribir...', 'ERROR', {duration: 500});
      }
    )
  }


}
