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
  contador:number
  id:number
  nombreC:string
  totalProd:number
  importe:number

  constructor(){
    this.newItemEvent = new EventEmitter<Pedido[]>()
    this.pedidos=[]
    this.contador = 1
    this.id=0
    this.nombreC=""
    this.totalProd=0
    this.importe=0
  }

  addPedido(){
    this.pedidos.push(new Pedido(this.contador, this.id, this.nombreC, this.totalProd,this.importe))
    this.contador++
    this.newItemEvent.emit(this.pedidos)
  }
}
