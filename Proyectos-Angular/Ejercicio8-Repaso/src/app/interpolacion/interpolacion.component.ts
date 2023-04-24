import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent {
  texto:string
  constructor(){
    this.texto = ""
  }

  ngOnInit(){
    let t = prompt("Escriba un mensaje")
    this.texto = t != null? t : ""
  }
}
