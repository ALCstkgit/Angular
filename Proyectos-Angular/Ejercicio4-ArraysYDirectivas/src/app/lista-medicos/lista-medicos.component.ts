import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Medico } from '../modelo/medico';

@Component({
  selector: 'app-lista-medicos',
  templateUrl: './lista-medicos.component.html',
  styleUrls: ['./lista-medicos.component.css']
})
export class ListaMedicosComponent {
  @Output() e:EventEmitter<Medico>
  @Input() medico:Medico
  medicos: Medico[]

  constructor(){
    this.e = new EventEmitter<Medico>()
    this.medico = new Medico()
    this.medicos=[]
  }
  addMedico(){
    this.medicos.push(this.medico)
    this.e.emit(new Medico())
  }
}
