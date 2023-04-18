import { Component, Input } from '@angular/core';
import { Producto } from '../modelo/producto';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent {
  @Input() productos:Producto[]

  constructor(){
    this.productos = []
  }

  comprar(id:number){
    let p: Producto[] = this.productos.filter(pr => pr.id == id)
    p[0].cantidadExistencias--
  }
}
