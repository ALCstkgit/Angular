import { Component } from '@angular/core';

@Component({
  selector: 'app-componente3-fundamentos',
  templateUrl: './componente3-fundamentos.component.html',
  styleUrls: ['./componente3-fundamentos.component.css']
})
export class Componente3FundamentosComponent {
  cad : string
  sw : boolean

  constructor(){
    this.cad = ""
    this.sw = false
  }

  ngOnInit(){
    this.cambiarCad()
  }

  cambiarTexto(){
    this.sw = !this.sw
    this.cambiarCad()
  }

  cambiarCad(){
    this.cad = this.sw ? "Variable True" : "Variable False"
  }
}
