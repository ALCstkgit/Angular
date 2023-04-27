import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { InfoPedidosService } from '../servicios/info-pedidos.service';
import { Producto } from '../modelo/producto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-productos',
  templateUrl: './form-productos.component.html',
  styleUrls: ['./form-productos.component.css']
})
export class FormProductosComponent {
  form: FormGroup

  constructor(private router:ActivatedRoute, public pedidosServicio:InfoPedidosService){
    this.form = new FormGroup({
      idProducto: new FormControl(0),
      cantidad: new FormControl(0)
    })
  }

  enviar(){
    this.pedidosServicio.addPrductoAux(
      new Producto(
        this.form.value.idProducto,
        this.router.snapshot.params['id'],
        this.form.value.cantidad
      )
    )
    Object.keys(this.form.controls).forEach(key=>this.form.get(key)?.setValue(0))
  }
}