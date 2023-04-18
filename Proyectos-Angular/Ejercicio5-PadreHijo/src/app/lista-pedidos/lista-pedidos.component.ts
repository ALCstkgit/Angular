import { Component } from '@angular/core';
import { Pedido } from '../modelo/pedido';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})
export class ListaPedidosComponent {
  pedidos:Pedido[]

  constructor(){
    this.pedidos=[]
  }

  igualaArr(arr:Pedido[]){
    this.pedidos=arr
  }
}
