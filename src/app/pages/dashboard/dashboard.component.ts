import { Component, OnInit } from '@angular/core';
import { LegajoCardComponent } from '../../components/legajo-card/legajo-card.component';
import { DocumentosListComponent } from '../../components/documentos-list/documentos-list.component';
import { AnexosListComponent } from '../../components/anexos-list/anexos-list.component';
import { LegajoSearchComponent } from '../../components/legajo-search/legajo-search.component';
import { FacadeService } from '../../core/facade.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Legajo } from '../../models/legajo.model';
import { Casillero } from '../../models/casillero.model';
import { Documento } from '../../models/documento.model';
import { AsyncPipe, NgIf, NgFor } from '@angular/common';
import { DocumentoSearchComponent } from '../../components/documento-search/documento-search.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    LegajoCardComponent,
    DocumentosListComponent,
    AnexosListComponent,
    LegajoSearchComponent,
    DocumentoSearchComponent,
    AsyncPipe,
    NgIf,
    NgFor
  ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  ///
  casilleros$: Casillero[] = [];
  legajos$!: Observable<Legajo[]>;
  documentos$!: Observable<Documento[]>;
  filterDocumentos: Documento[] = [];
  ///
  selectedCasilleroId!: number | null;
  selectedCasilleroNombre: string = '';
  selectedLegajo: Legajo | null = null;
  selectedDocumento!: Documento | null;
  hasSearched: boolean = false;
  
  //propiedad para estado
  user: any;

  //prppiedades para documentos principales
  // selectedLegajo!: Legajo | null;
  
  showDocumentoSearch = false;      // muestra/oculta el buscador
  documentoEncontrado!: Documento | null; // documento principal encontrado
  mostrarAnexos = false;            // si se muestran los anexos

  constructor(private facade: FacadeService, 
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {

    // 👤 recibir usuario desde login
    this.user = history.state.user;


    // 🧠 PROTECCIÓN SIMPLE
  if (!this.user) {
    this.router.navigate(['/login']);
    return;
  }

    // Cargar casilleros
    this.facade.getCasilleros().subscribe(c => this.casilleros$ = c);

    // Detectar casillero seleccionado por queryParams
    this.route.queryParamMap.subscribe(params => {
      const casilleroId = Number(params.get('casillero'));
      if (casilleroId) {
        this.selectedCasilleroId = casilleroId;
        const casillero = this.casilleros$.find(c => c.id === casilleroId);
        this.selectedCasilleroNombre = casillero?.nombreCasillero ?? '';
        this.legajos$ = this.facade.getLegajosByCasillero(casilleroId);
      } else {
        this.selectedCasilleroId = null;
        this.selectedCasilleroNombre = '';
        this.legajos$ = of([]);
      }
    });
  }

  // Eliminamos la carga automática de todos los legajos por casillero
  filterLegajos(term: number) {

  // validar que haya casillero seleccionado
  if (!this.selectedCasilleroId) {
    alert("Debes seleccionar un casillero primero");
    return;
  }

  if (!term || term <= 0) {
    this.selectedLegajo = null;
    this.hasSearched = false;
    return;
  }

  this.hasSearched = true;

  this.facade.getLegajoById(this.selectedCasilleroId, term).subscribe({
    next: (l) => {
      this.selectedLegajo = l;
    },
    error: () => {
      this.selectedLegajo = null;
    }
  });
}


  // Al seleccionar un legajo desde la lista de resultados
  onSelectLegajo(legajo: Legajo) {
    this.selectedLegajo = legajo; // solo este legajo se mostrará
  }

  // Al seleccionar un documento principal
  onSelectDocumento(doc: Documento) {
    this.selectedDocumento = doc;
  }

  
  onLegajoBuscarDocumentos(legajo: Legajo) {
  this.selectedLegajo = legajo; // asegurarte que se muestre la card
  this.showDocumentoSearch = true; // muestra el buscador
  }


  //logout session
  logout() {
  this.router.navigate(['/login']);
}
}