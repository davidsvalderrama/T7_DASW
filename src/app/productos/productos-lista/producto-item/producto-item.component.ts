import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/productos/Producto';
import { ProductosService } from '../../productos.service';


@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.css']
})
export class ProductoItemComponent implements OnInit {

  constructor() { }

  @Input() producto: Producto[];
  @Input() car: Producto[];
  @Output() agregarCarrrito = new EventEmitter();
  @Output() quitarCarrito = new EventEmitter();
  @Output() info = new EventEmitter();

  ngOnInit() {
  }

  quitarProducto() {
    this.quitarCarrito.emit(this.producto);
  }

  anadirProducto() {
    this.agregarCarrrito.emit(this.producto);
  }

  infoProducto() {
    this.info.emit(this.producto);
  }



}
