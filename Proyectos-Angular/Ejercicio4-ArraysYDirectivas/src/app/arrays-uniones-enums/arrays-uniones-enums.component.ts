import { Component } from '@angular/core';

@Component({
  selector: 'app-arrays-uniones-enums',
  templateUrl: './arrays-uniones-enums.component.html',
  styleUrls: ['./arrays-uniones-enums.component.css']
})
export class ArraysUnionesEnumsComponent {
  arr:number[]
  direcciones:string[] = Object.values(Direcciones)
  variableUnion: 1 | 2 | 3
  direccion : string

  constructor(){
    this.variableUnion = 1
    this.arr = [1,2,3,4]
    this.direccion = Direcciones.Arriba

    console.log("//ForEach//")
    this.arr.forEach(function(value){
      console.log(value)
    })

    console.log("//Añadir al final//")
    this.arr.push(5)
    console.log(this.arr)

    console.log("//Añadir al inicio//")
    this.arr.unshift(0)
    console.log(this.arr)

    console.log("//Eliminar ultimo//")
    this.arr.pop()
    console.log(this.arr)

    console.log("//Eliminar primero//")
    this.arr = this.arr.slice(1)
    console.log(this.arr)

    console.log("//Invertir Array//")
    this.arr.reverse()
    console.log(this.arr)
  }
}

export enum Direcciones{
  Arriba = 'Arriba',
  Abajo = 'Abajo',
  Izquierda = 'Izquierda',
  Derecha = 'Derecha'
}