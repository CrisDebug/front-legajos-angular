import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Legajo } from '../models/legajo.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LegajoService {

  private baseUrl = 'http://localhost:8080/casilleros';

  constructor(private http: HttpClient) {}

  // GET /casilleros/{casilleroId}/legajos/{legajoId}
  getById(casilleroId: number, legajoId: number): Observable<Legajo> {
    return this.http.get<Legajo>(`${this.baseUrl}/${casilleroId}/legajos/${legajoId}`);
  }

  // GET /casilleros/{casilleroId}/legajos
  getByCasillero(casilleroId: number): Observable<Legajo[]> {
    return this.http.get<Legajo[]>(`${this.baseUrl}/${casilleroId}/legajos`);
  }

  // FUTURO: search real en backend
  search(term: string): Observable<Legajo[]> {
    return of([]);
  }
}