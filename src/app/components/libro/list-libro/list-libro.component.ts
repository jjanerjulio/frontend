import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibroI } from 'src/app/models/Libro';
import { LibroService } from 'src/app/services/libros/libro.service';

@Component({
  selector: 'app-list-libro',
  templateUrl: './list-libro.component.html',
  styleUrls: ['./list-libro.component.css']
})
export class ListLibroComponent implements OnInit {
  public libros: LibroI[] = []
  public displayedColumns: string[] = ["id", "titulo", "numero_pag", "editorial", "ISBN", "Acciones"]
    constructor(
      private libroService:LibroService,
      private router: Router
    ) { }
  
    ngOnInit(): void {
      this.mostrarlibro()
    }
    mostrarlibro() {
      this.libroService.getAllLibro()
        .subscribe({
          next: (data) => {
            this.libros = data.libro
            console.log(this.libros)
          }
        })
    }

}
