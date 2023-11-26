import { Component, Input } from '@angular/core';
import { Juego } from 'src/app/models/juego';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() listadoVentas: Juego[] = [];

  @Input() cargandoVentas = false;

  ventaSelecionada: Juego | null = null;

}
