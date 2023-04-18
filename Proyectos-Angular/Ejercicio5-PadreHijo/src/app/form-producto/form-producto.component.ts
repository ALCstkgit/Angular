import { Component } from '@angular/core';
import { Producto } from '../modelo/producto';
import { Tipos } from '../modelo/tipos';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent {
  productos:Producto[]
  producto:Producto
  contador:number
  tipos:string[]

  constructor(){
    this.producto = new Producto()
    this.productos = []
    this.contador = 1
    this.tipos = Object.values(Tipos)
  }

  addProducto(){
    let p: Producto[] = this.productos.filter(pr => pr.nombre == this.producto.nombre)
    if(p.length==0){
      this.producto.id = this.contador
      this.productos.push(this.producto)
      this.contador++
    }else{
      p[0].cantidadExistencias += this.producto.cantidadExistencias
    }
    this.producto = new Producto()
  }
}
