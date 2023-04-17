import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
  edad:number
  num:number
  alumnos:string[]
  constructor(){
    this.edad = 0
    this.num = 0
    this.alumnos=["Pepe", "Juan", "Antonio", "Laura", "Sara", "Maria"]
  }
}
