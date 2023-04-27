import { Injectable } from '@angular/core';
import { Pedido } from '../modelo/pedido';
import { Observable, of } from 'rxjs';
import { Producto } from '../modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class InfoPedidosService {
  pedidos:Pedido[]
  productos:Producto[]
  productosAux:Producto[]

  constructor() {
    this.pedidos = []
    this.productos = []
    this.productosAux = []
  }

  listPedidos():Observable<Pedido[]>{
    return of(this.pedidos)
  }

  listaProductos():Observable<Producto[]>{
    return of(this.productos)
  }

  getNuevoId():number{
    return this.pedidos.length > 0 ?this.pedidos[this.pedidos.length-1].idPedido+1 : 1
  }

  addPedido(pedido:Pedido){
    this.pedidos.push(pedido)
    this.productosAux.forEach(p => this.productos.push(p))
    this.productosAux = []
  }

  addPrductoAux(producto:Producto){
    this.productosAux.push(producto)
  }
}
