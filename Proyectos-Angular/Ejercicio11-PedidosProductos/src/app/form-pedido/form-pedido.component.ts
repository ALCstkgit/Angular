import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { InfoPedidosService } from '../servicios/info-pedidos.service';
import { Pedido } from '../modelo/pedido';

@Component({
  selector: 'app-form-pedido',
  templateUrl: './form-pedido.component.html',
  styleUrls: ['./form-pedido.component.css']
})
export class FormPedidoComponent {
  form: FormGroup
  addPosible:boolean

  constructor(private ruta:Router, public pedidosServicio:InfoPedidosService){
    this.form = new FormGroup({
      idPedido: new FormControl(this.pedidosServicio.getNuevoId()),
      idCliente: new FormControl(''),
      formaPago: new FormControl(''),
      direccion: new FormControl('')
    })
    this.addPosible = false
    this.form.get('idPedido')?.disable()
  }

  enviar(){
    this.addPosible = true
    this.ruta.navigate(['/detalles',this.form.value.idPedido])
    Object.keys(this.form.controls).forEach( key => this.form.get(key)?.disable())
  }

  insert(){
    this.pedidosServicio.addPedido(
      new Pedido(
        this.form.value.idPedido,
        this.form.value.idCliente,
        this.form.value.formaPago,
        this.form.value.direccion
      )
    )
    this.addPosible = false
    this.ruta.navigate(['/'])
    /*this.form.reset()
    this.form.get('idPedido')?.setValue(this.pedidosServicio.getNuevoId())*/
    Object.keys(this.form.controls).forEach(
      key => {
        this.form.get(key)?.enable()
        key == 'idPedido'?
        this.form.get(key)?.setValue(this.pedidosServicio.getNuevoId()):
        this.form.get(key)?.setValue('')
      }
    )
  }
}