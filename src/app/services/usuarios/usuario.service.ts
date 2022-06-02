import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioI } from 'src/app/models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  api_uri = 'http://localhost:4000';
  base_path = `${this.api_uri}/usuarios`
  constructor(
    private http:HttpClient
  ) { }

  getAllUsuario():Observable<{usuario:UsuarioI[]}>{
    return this.http
      .get<{usuario:UsuarioI[]}>(this.base_path)
  }


  create(data: any):Observable<UsuarioI>{
    return this.http.post<UsuarioI>(this.base_path, data)
  }

}
