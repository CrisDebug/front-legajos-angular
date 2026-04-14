
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Casillero } from '../models/casillero.model';
import { Observable , of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CasilleroService {

  //varibale privada para peticion Http
  private baseUrl ='http://localhost:8080/casilleros';

  constructor(private http: HttpClient) {}

  // aqui iran las llamadas HTTP
    getAll(): Observable<Casillero[]> {
    return this.http.get<Casillero[]>(this.baseUrl);
    }


  // //mock casilleros
  // getAll(): Observable<Casillero[]> {
  // return of([
  //           { id: 1, manual_id: 1, nombre_casillero: 'Casillero A' },
  //           { id: 2, manual_id: 2, nombre_casillero: 'Casillero B' },
  //           { id: 3, manual_id: 3, nombre_casillero: 'Casillero C' },
  //         ]);
  //       }
    
}
