import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrestarService } from 'src/app/services/prestamos/prestar.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PrestarI } from 'src/app/models/Prestar';

@Component({
  selector: 'app-create-prestar',
  templateUrl: './create-prestar.component.html',
  styleUrls: ['./create-prestar.component.css']
})
export class CreatePrestarComponent implements OnInit {

  public formulario: FormGroup = this.formBuilder.group(
    {
      fecha_pres: ['', [Validators.required]],
      fecha_dev: ['', [Validators.required]],
      UsuarioId: ['', [Validators.required]],
      EjemplarId: ['', [Validators.required]]
    }
  )
  constructor(
    private formBuilder: FormBuilder,
    private prestarService: PrestarService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    const formValue:PrestarI = this.formulario.value;
    this.prestarService.create(formValue).subscribe(
      ()=>{
        this.snackBar.open('Prestar creado correctamente...', 'ok', {duration: 500});
        this.router.navigateByUrl('/prestar');
      },
      err =>{
        this.snackBar.open('Error al crear el Prestar...', 'ERROR', {duration: 500});
      }
    )
  }

}
