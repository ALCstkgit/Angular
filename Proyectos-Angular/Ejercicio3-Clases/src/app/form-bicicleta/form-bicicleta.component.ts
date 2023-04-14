import { Component } from '@angular/core';
import { Bicicleta } from "../modelo/bicicleta";

@Component({
  selector: 'app-form-bicicleta',
  templateUrl: './form-bicicleta.component.html',
  styleUrls: ['./form-bicicleta.component.css']
})
export class FormBicicletaComponent {
  bicicleta : Bicicleta
  info : string
  velocidad : number

  constructor(){
    this.bicicleta = new Bicicleta("", "", 0, 0, 0, false)
    this.info = ""
    this.velocidad = 0
  }

  enviarDatos(){
    this.info = this.bicicleta.toString()
  }
}
