import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Juego, Catalogo } from '../models/juego';

const API_PATH = 'https://653039776c756603295e6dda.mockapi.io/';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getVentaListas(): Observable<Juego[]> {
    const path = API_PATH +'ventas';
    return this.http.get<Juego[]>(path);
  }

  getCatalogoListas(): Observable<Catalogo[]> {
    const path = API_PATH +'catalogo';
    return this.http.get<Catalogo[]>(path);
  }

  postJuego(nuevoJuego: Juego): Observable<Juego> {
    const path = API_PATH + 'ventas'; // Cambia a la ruta correcta para el POST
    return this.http.post<Juego>(path, nuevoJuego);
  }
}
