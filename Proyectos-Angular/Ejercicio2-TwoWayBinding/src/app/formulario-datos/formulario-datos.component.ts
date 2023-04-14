import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-datos',
  templateUrl: './formulario-datos.component.html',
  styleUrls: ['./formulario-datos.component.css']
})
export class FormularioDatosComponent {
  correo:string
  direccion:string
  telefono:string
  comunidad:string
  pago:string
  acepta:boolean
  texto:string

  constructor(){
    this.correo = ""
    this.direccion = ""
    this.telefono = ""
    this.comunidad = "madrid"
    this.pago = ""
    this.acepta = false
    this.texto=""
  }

  enviarDatos(){
    this.texto = this.correo +"," +this.direccion+","+this.telefono+","+this.comunidad+","+this.pago+","+(this.acepta?"Acepta":"NO acepta")
  }
}
