import { Component, Output, EventEmitter } from '@angular/core';
import { Pedido } from '../modelo/pedido';

@Component({
  selector: 'app-form-pedidos',
  templateUrl: './form-pedidos.component.html',
  styleUrls: ['./form-pedidos.component.css']
})
export class FormPedidosComponent {
  @Output() newItemEvent:EventEmitter<Pedido[]>
  pedidos:Pedido[]
  p:Pedido
  contador:number

  constructor(){
    this.newItemEvent = new EventEmitter<Pedido[]>()
    this.p=new Pedido()
    this.pedidos=[]
    this.contador = 1
  }

  addPedido(){
    this.p.idPedido = this.contador
    this.pedidos.push(this.p)
    this.p = new Pedido()
    this.contador++
    this.newItemEvent.emit(this.pedidos)
  }
}
