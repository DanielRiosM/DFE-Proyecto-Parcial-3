import { Component } from '@angular/core';
import { Juego } from 'src/app/models/juego';
import {DataService} from 'src/app/services/data.service';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent {
  cargandoVentas = false;

  listadoVentas: Juego[]=[];
  
  constructor(private data:DataService){

  }

  ngOnInit() {
    this.getDataListas();
  }

  get mensaje():string{
    if(this.cargandoVentas){
      return 'Cargando...';
    }else{
      return this.listadoVentas.length >0?
      `${this.listadoVentas.length}.`:
      'No se han encontrado registros :('
    }
  }

  get importe(): string {
    if (this.cargandoVentas) {
      return 'Cargando...';
    } else {
      if (this.listadoVentas.length > 0) {
        const total = this.listadoVentas.reduce((sum, ventas) => sum + ventas.precio, 0);
        return `${total}`;
      } else {
        return 'No se han encontrado registros :(';
      }
    }
  }


  private getDataListas(){
    this.cargandoVentas = true;
    this.data.getVentaListas()
    .subscribe(x => {
      this.cargandoVentas = false;
      this.listadoVentas = x;
    });
  }

}
