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
  nombre:string
  apellido:string
  dni:string
  telefono:string
  
  constructor(){
    this.newItemEvent = new EventEmitter<Paciente>()
    this.nombre = ""
    this.apellido = ""
    this.dni = ""
    this.telefono = ""
  }

  sendPaciente(){
    this.newItemEvent.emit(new Paciente(this.nombre,this.apellido,this.dni,this.telefono))
  }
}
