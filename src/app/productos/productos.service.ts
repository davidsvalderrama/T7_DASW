import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Producto } from './Producto';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cambiaDato = new Subject<Producto[]>();

  productos: Producto[] = [
    new Producto(1, 'Xbox', 'Microsoft', 'Juegos', 7000, 10),
    new Producto(2, 'Playstation', 'Sony', 'Juegos', 8000, 8),
    new Producto(3, 'Serie GoT', 'HBO', 'Serie', 1100, 12),
    new Producto(4, 'Prision Break', 'FOX', 'Serie', 850, 4),
    new Producto(5, 'World of Warcraft', 'Blizzard', 'Juegos', 2000, 3),
    new Producto(6, 'FIFA', 'EA', 'Juegos', 200, 14),
    new Producto(7, 'Halo', '343', 'Juegos', 1000, 22),
  ];

  carrito = [];

  constructor() { }

  getProductos(): Producto[] {
    return this.productos.slice();
  }

  getProducto(id: number) {
    const pos = this.productos.findIndex(p => p.id === id);
    return Object.assign({}, this.productos[pos]);
  }

  getCarrito(): Producto[] {
    return this.carrito.slice();
  }

  addCarrito(producto: Producto) {
    if (!this.carrito.includes(producto)) {
      this.carrito.push(Object.assign({}, producto));
      this.notificarCambios();
    }
  }

  borrarCarrito(id: number): boolean {
    const pos = this.carrito.findIndex(p => p.id === id);
    if (pos >= 0) {
      this.carrito.splice(pos, 1);
      this.notificarCambios();
      return true;
    }
    return false;
  }

  private notificarCambios() {
    this.cambiaDato.next(this.productos.slice());
  }

}
