import { Component, Input } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { Documento } from '../../models/documento.model';

@Component({
  selector: 'app-documento-search',
  standalone: true,
  imports: [NgIf, NgFor], // si usas *ngIf o *ngFor en el template
  templateUrl: './documento-search.component.html',
  styleUrls: ['./documento-search.component.css'] // ojo: styleUrls en plural
})
export class DocumentoSearchComponent {
  @Input() legajoId!: number; // para recibir el legajo seleccionado
  @Input() filterDocumentos: Documento[] = []; // si quieres pasar documentos filtrados desde dashboard
}