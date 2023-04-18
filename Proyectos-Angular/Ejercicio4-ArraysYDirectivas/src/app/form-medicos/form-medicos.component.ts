import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Medico } from '../modelo/medico';

@Component({
  selector: 'app-form-medicos',
  templateUrl: './form-medicos.component.html',
  styleUrls: ['./form-medicos.component.css']
})
export class FormMedicosComponent{
  medico: Medico

  constructor(){
    this.medico = new Medico()
  }

  resetM(m:Medico){
    this.medico = m
  }
}
