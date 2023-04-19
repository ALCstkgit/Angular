import { Component } from '@angular/core';
import { FacturasService } from '../servicios/facturas.service';
import { Factura } from '../modelo/factura';

@Component({
  selector: 'app-form-facturas',
  templateUrl: './form-facturas.component.html',
  styleUrls: ['./form-facturas.component.css']
})
export class FormFacturasComponent {
  factura: Factura
  fMuestra: Factura

  constructor(public facturasService : FacturasService){
    this.factura = new Factura()
    this.fMuestra = new Factura()
  }

  crear(){
    this.facturasService.create(this.factura)
    this.factura = new Factura()
  }

  modificar(){
    this.facturasService.update(this.factura)
    this.factura = new Factura()
  }

  muestraF(){
    this.fMuestra = this.facturasService.read(this.factura.idFactura)
  }
}
