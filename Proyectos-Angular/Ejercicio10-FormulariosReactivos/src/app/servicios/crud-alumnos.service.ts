import { Injectable } from '@angular/core';
import { Alumno } from '../modelo/alumno';
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CrudAlumnosService {
  alumnos:Alumno[]

  constructor() {
    this.alumnos = [
      {id:1,dni:"46282A",nombre:"Antonio",hrs:456},
      {id:2,dni:"34656G",nombre:"Pepa",hrs:123},
      {id:3,dni:"45829Y",nombre:"Gerardo",hrs:867}
    ]
  }

  create(alumno:Alumno){
    this.read(alumno) == -1?this.alumnos.push(alumno):alert("Ya existe un alumno con ese id")
  }

  update(alumno:Alumno){
    let pos = this.read(alumno)
    if(pos > -1) this.alumnos[pos] = alumno
  }

  mostrarLista():Observable<Alumno[]>{
    return of(this.alumnos)
  }

  buscarAlumno(id:number):Observable<Alumno>{
    let al= this.alumnos.find(a => id == a.id)
    return al==undefined?of({id:0,dni:"",nombre:"",hrs:0}):of(al)
  }

  private read(alumno:Alumno):number{
    let alu = this.alumnos.find(a => a.id == alumno.id)
    return alu != undefined?this.alumnos.indexOf(alu):-1
  }
}
