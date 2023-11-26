import { Component } from '@angular/core';
import { Juego, Catalogo, JuegoEstatus } from 'src/app/models/juego';
import {DataService} from 'src/app/services/data.service';




@Component({
  selector: 'app-explorer-catalogo',
  templateUrl: './explorer-catalogo.component.html',
  styleUrls: ['./explorer-catalogo.component.scss']
})
export class ExplorerCatalogoComponent {
  games: Catalogo[] = [];
  nuevoJuego: Juego = {
    id: 0,
    cliente: '',
    telefono: 0,
    juego: '',
    vendedor: '',
    fecha: '',
    precio: 0,
    notas: '',
    estatus: JuegoEstatus.Disponible
  };
  

  constructor(private data: DataService) {}

  ngOnInit() {
    this.loadGames();
  }

  private loadGames(){
    this.data.getCatalogoListas().subscribe(
      (games: Catalogo[]) => {
        this.games = games;
      },
      (error) => {
        console.error('Error al cargar la lista de catálogo:', error);
      }
    );
  }

  // Método para establecer los valores del nuevo juego desde el catálogo
  setNuevoJuegoFromCatalogo(catalogoJuego: Catalogo) {
    this.nuevoJuego.id = catalogoJuego.id;
    this.nuevoJuego.juego = catalogoJuego.title;
    this.nuevoJuego.precio = catalogoJuego.price;
  }

  onEnviarVenta(juego: Catalogo) {
    // Aquí puedes realizar alguna lógica adicional si es necesario
    console.log('Enviando juego a Ventas:', juego);

    // Hacer el POST utilizando el servicio de DataService
    this.data.postJuego({
        id: juego.id,
        cliente: 'cliente ',
        telefono: 6624715600,
        juego: juego.title,
        vendedor: 'vendedor ',
        fecha: '25/11/2023',
        precio: juego.price,
        notas: 'Excelente',
        estatus: JuegoEstatus.Disponible
    }).subscribe(
        (response) => {
            console.log('Juego enviado a Ventas exitosamente:', response);
            // Puedes realizar alguna acción adicional si es necesario
            // Recargar la lista de juegos después de enviar a Ventas
            this.loadGames();
        },
        (error) => {
            console.error('Error al enviar el juego a Ventas:', error);
        }
    );
}
}
