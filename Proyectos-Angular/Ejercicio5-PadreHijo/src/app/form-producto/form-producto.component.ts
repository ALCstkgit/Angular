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
  contador:number
  nombre:string
  cantidad:number
  precio:number
  tipo:Tipos
  tipos:string[]

  constructor(){
    this.productos = []
    this.contador = 1
    this.nombre = ""
    this.cantidad = 0
    this.precio = 0
    this.tipo = Tipos.Alimento
    this.tipos = Object.values(Tipos)
  }

  addProducto(){
    let p: Producto[] = this.productos.filter(pr => pr.nombre == this.nombre)
    if(p.length==0){
      this.productos.push(new Producto(this.contador,this.nombre,this.cantidad,this.precio,this.tipo))
      this.contador++
    }else{
      p[0].cantidadExistencias += this.cantidad
    }
  }
}
