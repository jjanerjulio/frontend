import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LibroI } from 'src/app/models/Libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  api_uri = 'http://localhost:4000';
  base_path = `${this.api_uri}/libros`
  constructor(
    private http:HttpClient
  ) { }

  getAllLibro():Observable<{libro:LibroI[]}>{
    return this.http
      .get<{libro:LibroI[]}>(this.base_path)
  }


  create(data: any):Observable<LibroI>{
    return this.http.post<LibroI>(this.base_path, data)
  }

}
