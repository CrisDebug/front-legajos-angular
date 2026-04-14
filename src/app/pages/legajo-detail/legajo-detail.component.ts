import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacadeService } from '../../core/facade.service';
import { Legajo } from '../../models/legajo.model';
import { NgIf } from '@angular/common';
import { Observable, switchMap } from 'rxjs';

//para strem legajos
import { AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-legajo-detail',
  standalone: true,
  imports: [NgIf,AsyncPipe],
  templateUrl: './legajo-detail.component.html',
  styles: ``
})
export class LegajoDetailComponent implements OnInit {
  

  //estream para asincronia legajos

  legajo$!: Observable<Legajo | null>;

  // legajoId: string | null = null;
  // legajo: Legajo | null = null;
  
  constructor(
    private route : ActivatedRoute,
    private facade: FacadeService
  ){} //cuerpo vacio del constructor no ejecuta ninguna logica

    
  //stream de asincronia para legajos
  ngOnInit(): void {
      this.legajo$ = this.route.paramMap.pipe(
        switchMap(params => {
          const id = params.get('id');
            return this.facade.getLegajoById(Number(id)); 
        })
      );
  }

  //  suscribe manual
  //  ngOnInit(): void {
  //   this.route.paramMap
  //   .pipe(
  //     switchMap(params => {
  //       this.legajoId = params.get('id');
  //       return this.facade.getLegajoById(Number(this.legajoId));
  //     })
  //   )
  //   .subscribe(data => {
  //     this.legajo = data;
  //   });
  // }
}
