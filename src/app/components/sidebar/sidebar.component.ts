import { Component } from '@angular/core';
import { FacadeService } from '../../core/facade.service';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { NgFor, AsyncPipe, NgClass, NgIf } from '@angular/common';
import { Casillero } from '../../models/casillero.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, NgFor, AsyncPipe, NgClass, NgIf],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  casilleros$!: Observable<Casillero[]>;
  menuOpen = false;
  constructor(private facade: FacadeService) {
    this.casilleros$ = this.facade.getCasilleros();
  }
}