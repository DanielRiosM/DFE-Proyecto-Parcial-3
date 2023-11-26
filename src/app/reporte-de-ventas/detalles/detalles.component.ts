import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Juego } from 'src/app/models/juego';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent {
  @Input() juego: Juego  | null = null;

  @Output() close: EventEmitter<void> = new EventEmitter();

  
  onCloseModal() {
    this.close.emit();
  }
}
