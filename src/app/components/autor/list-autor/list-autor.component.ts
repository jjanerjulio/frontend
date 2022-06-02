import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutorI } from 'src/app/models/Autor';
import { AutorService } from 'src/app/services/autores/autor.service';

@Component({
  selector: 'app-list-autor',
  templateUrl: './list-autor.component.html',
  styleUrls: ['./list-autor.component.css']
})
export class ListAutorComponent implements OnInit {

  public autors: AutorI[] = []
  public displayedColumns: string[] = ["id", "nombre"]
    constructor(
      private autorService:AutorService,
      private router: Router
    ) { }
  
    ngOnInit(): void {
      this.mostrarautor()
    }
    mostrarautor() {
      this.autorService.getAllAutor()
        .subscribe({
          next: (data) => {
            this.autors = data.autor
            console.log(this.autors)
          }
        })
    }
  

}
