import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Legajo } from '../../models/legajo.model';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-legajo-card',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './legajo-card.component.html',
  styles: ``
})
export class LegajoCardComponent {
  @Input() legajo!: Legajo;
  @Input() casilleroNombre: string = '';
  @Output() selectLegajo = new EventEmitter<Legajo>();

  onSelect() {
    this.selectLegajo.emit(this.legajo);
  }

  @Output() buscarDocumentos = new EventEmitter<Legajo>();

  onBuscarDocumentos() {
  this.buscarDocumentos.emit(this.legajo);
}
}