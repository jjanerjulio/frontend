import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EscribirI } from 'src/app/models/Escribir';
import { EscribirService } from 'src/app/services/escritos/escribir.service';

@Component({
  selector: 'app-list-escribir',
  templateUrl: './list-escribir.component.html',
  styleUrls: ['./list-escribir.component.css']
})
export class ListEscribirComponent implements OnInit {

  public escritos: EscribirI[] = []
  public displayedColumns: string[] = ["Fecha", "AutorId", "LibroId", "Acciones"]
    constructor(
      private escribirService:EscribirService,
      private router: Router
    ) { }
  
    ngOnInit(): void {
      this.mostrarescribir()
    }
    mostrarescribir() {
      this.escribirService.getAllEscribir()
        .subscribe({
          next: (data) => {
            this.escritos = data.escribir
            console.log(this.escritos)
          }
        })
    }
}
