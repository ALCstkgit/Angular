import { Component } from '@angular/core';
import { Paciente } from '../modelo/paciente';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css']
})
export class ListaPacientesComponent {
  listPacientes : Paciente[]
  constructor(){
    this.listPacientes = []
  }

  addPaciente(p:Paciente){
    this.listPacientes.push(p)
  }
}