import { Injectable } from '@angular/core';
import { Factura } from '../modelo/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {
  facturas:Factura[]
  contador:number


  constructor() {
    this.facturas = []
    this.contador = 1
  }

  create(f:Factura):void{
    f.idFactura = this.contador
    this.facturas.push(f)
    this.contador++
  }

  read(id:number):Factura{
    let f = this.facturas.find(f => f.idFactura === id)
    if(f != undefined){
      return f
    }else{
      return new Factura()
    }
  }

  update(f:Factura):void{
    let fac = this.read(f.idFactura)
    if(fac != undefined){
      let n = this.facturas.indexOf(fac)
      this.facturas[n] = f
    }else{
      alert("No se encuentra la factura")
    }
  }

  delete(f:Factura){
    let fac = this.read(f.idFactura)
    if(fac != undefined){
      let n = this.facturas.indexOf(fac)
      this.facturas.splice(n,1)
    }else{
      alert("No se encuentra la factura")
    }
  }
}
