import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Documento } from '../../models/documento.model';

@Component({
  selector: 'app-documentos-list',
  standalone: true,
  imports: [],
  template: `
    <div *ngIf="documentos?.length; else noDocs">
      <h4>Documentos</h4>
      <ul>
        <li *ngFor="let doc of documentos">
          {{ doc.nombre_documento }}
        </li>
      </ul>
    </div>
    <ng-template #noDocs>
      <p>No hay documentos.</p>
    </ng-template>
  `,
  styles: ``
})
export class DocumentosListComponent {
  @Input() documentos: Documento[] = [];
}