import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EscribirI } from 'src/app/models/Escribir';

@Injectable({
  providedIn: 'root'
})
export class EscribirService {
  
  api_uri = 'http://localhost:4000';
  base_path = `${this.api_uri}/escritos`
  constructor(
    private http:HttpClient
  ) { }

  getAllEscribir():Observable<{escribir:EscribirI[]}>{
    return this.http
      .get<{escribir:EscribirI[]}>(this.base_path)
  }

  create(data: any):Observable<EscribirI>{
    return this.http.post<EscribirI>(this.base_path, data)
  }
}
