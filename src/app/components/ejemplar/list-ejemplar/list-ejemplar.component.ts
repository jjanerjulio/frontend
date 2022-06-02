import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EjemplarI } from 'src/app/models/Ejemplar';
import { EjemplarService } from 'src/app/services/ejemplares/ejemplar.service';


@Component({
  selector: 'app-list-ejemplar',
  templateUrl: './list-ejemplar.component.html',
  styleUrls: ['./list-ejemplar.component.css']
})
export class ListEjemplarComponent implements OnInit {

  public ejemplars: EjemplarI[] = []
  public displayedColumns: string[] = ["id", "localizacion", "LibroId", "Acciones"]
    constructor(
      private ejemplarService:EjemplarService,
      private router: Router
    ) { }
  
    ngOnInit(): void {
      this.mostrarejemplar()
    }
    mostrarejemplar() {
      this.ejemplarService.getAllEjemplar()
        .subscribe({
          next: (data) => {
            this.ejemplars = data.ejemplar
            console.log(this.ejemplars)
          }
        })
    }

}
