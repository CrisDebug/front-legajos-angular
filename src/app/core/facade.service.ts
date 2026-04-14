import { Injectable } from '@angular/core';
import { LegajoService } from './legajo.service';
import { CasilleroService } from './casillero.service';


@Injectable({ providedIn: 'root' })
export class FacadeService {
  constructor(
    private legajoService: LegajoService,
    private casilleroService: CasilleroService
  ) {}

  // Aquí se crearán los métodos que usará la UI
  // Ej: getCasilleros(), getLegajoCompleto(), buscarLegajo(), etc.
  //getLegajo por id
  getLegajoById(casilleroId: number, legajoId: number){
  return this.legajoService.getById(casilleroId, legajoId);
}

  //agregamos un metodo que nos devuelva todos los casillero
  //metodo getCasillero() nos traera la info a traves de un mock
  getCasilleros()
  {
    return this.casilleroService.getAll();
  }
  getLegajosByCasillero(casilleroId: number){
    return this.legajoService.getByCasillero(casilleroId);
  }

  //legajos search 
  getLegajosBySearch(term: string) {
    return this.legajoService.search(term);
  }
}