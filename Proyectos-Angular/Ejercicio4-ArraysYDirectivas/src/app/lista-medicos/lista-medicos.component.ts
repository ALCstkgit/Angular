import { Component, Input } from '@angular/core';
import { Medico } from '../modelo/medico';

@Component({
  selector: 'app-lista-medicos',
  templateUrl: './lista-medicos.component.html',
  styleUrls: ['./lista-medicos.component.css']
})
export class ListaMedicosComponent {
  @Input() medico:Medico
  medicos: Medico[]

  constructor(){
    this.medico = new Medico("","",0,"")
    this.medicos=[]
  }
  addMedico(){
    this.medicos.push(new Medico(this.medico.nombre,this.medico.apellido,this.medico.cedula,this.medico.img))
  }
}
