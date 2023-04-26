import { Component } from '@angular/core';
import { Alumno } from '../modelo/alumno';
import { CrudAlumnosService } from '../servicios/crud-alumnos.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent {
  alumnos:Alumno[]

  constructor(private crudAl:CrudAlumnosService){
  }

  ngOnInit(){
    this.crudAl.mostrarLista().subscribe((lista) => this.alumnos = lista)
  }
}
