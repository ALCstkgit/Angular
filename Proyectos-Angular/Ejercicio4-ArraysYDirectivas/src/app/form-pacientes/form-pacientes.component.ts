import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Paciente  } from '../modelo/paciente';

@Component({
  selector: 'app-form-pacientes',
  templateUrl: './form-pacientes.component.html',
  styleUrls: ['./form-pacientes.component.css']
})
export class FormPacientesComponent {
  @Output() newItemEvent : EventEmitter<Paciente>
  paciente:Paciente
  
  constructor(){
    this.paciente = new Paciente()
    this.newItemEvent = new EventEmitter<Paciente>()
  }

  sendPaciente(){
    this.newItemEvent.emit(this.paciente)
    this.paciente = new Paciente()
  }
}
