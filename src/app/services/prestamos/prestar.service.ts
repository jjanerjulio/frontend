import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrestarI } from 'src/app/models/Prestar';

@Injectable({
  providedIn: 'root'
})
export class PrestarService {

  api_uri = 'http://localhost:4000';
  base_path = `${this.api_uri}/prestarlib`
  constructor(
    private http:HttpClient
  ) { }

  getAllPrestar():Observable<{prestar:PrestarI[]}>{
    return this.http
      .get<{prestar:PrestarI[]}>(this.base_path)
  }


  create(data: any):Observable<PrestarI>{
    return this.http.post<PrestarI>(this.base_path, data)
  }
}
