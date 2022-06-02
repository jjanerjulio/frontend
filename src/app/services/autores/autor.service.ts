import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutorI } from 'src/app/models/Autor';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  api_uri = 'http://localhost:4000';
  base_path = `${this.api_uri}/autores`
  constructor(
    private http:HttpClient
  ) { }

  getAllAutor():Observable<{autor:AutorI[]}>{
    return this.http
      .get<{autor:AutorI[]}>(this.base_path)
  }


  create(data: any):Observable<AutorI>{
    return this.http.post<AutorI>(this.base_path, data)
  }

}
