import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-divisas',
  templateUrl: './calculadora-divisas.component.html',
  styleUrls: ['./calculadora-divisas.component.css']
})
export class CalculadoraDivisasComponent {
  num:number
  divisa:number
  texto : string
  constructor(){
    this.num = 1
    this.divisa = 1.1
    this.texto = ""
  }

  calculaCambio(){
    this.texto = "Resultado: "+ this.num * this.divisa
  }
}
