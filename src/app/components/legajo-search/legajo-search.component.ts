import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-legajo-search',
  standalone: true,
  templateUrl: './legajo-search.component.html',
})
export class LegajoSearchComponent {
  @Input() casilleroNombre: string = ''; // se actualizará dinámicamente
  @Output() search = new EventEmitter<number>();

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    const term = input.value.replace(/\D/g, ''); // solo números
    input.value = term; 
    this.search.emit(term ? Number(term) : 0);
  }
}