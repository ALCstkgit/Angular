import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  num1 : number
  num2 : number
  total : number

  constructor(){
    this.num1 = 0
    this.num2 = 0
    this.total = 0
  }

  sumar(){
    this.total = this.num1 + this.num2
  }

  restar(){
    this.total = this.num1 - this.num2
  }

  multi(){
    this.total = this.num1 * this.num2
  }

  div(){
    this.total = this.num1 / this.num2
  }

  /*operar(op:string){
    switch(op){
      case "+":
        this.total = this.num1 + this.num2
        break
      case "-":
        this.total = this.num1 - this.num2
        break
      case "*":
        this.total = this.num1 * this.num2
        break
      case "/":
        this.total = this.num1 / this.num2
        break
      default:
        alert("Error")
        break
    }
  }*/
}
