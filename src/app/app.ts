import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { Ofertas } from './components/ofertas/ofertas';
import { Productos } from './components/productos/productos';
import { Resenias } from './components/resenias/resenias';
import { Navegacion } from './components/navegacion/navegacion';

@Component({
  imports: [RouterOutlet,Navegacion, Inicio, Ofertas, Productos, Resenias],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('proyectotecnomax');
}
