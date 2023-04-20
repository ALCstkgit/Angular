import { Injectable } from '@angular/core';
import { Curso } from '../modelo/curso';
import { Niveles } from '../modelo/niveles';

@Injectable({
  providedIn: 'root'
})
export class CrudCursosService {
  cursos:Curso[]
  constructor() {
    this.cursos = [
      new Curso(1, "Angular principiantes", 80, Niveles.Iniciacion),
      new Curso(2, "Java Intermedio", 160, Niveles.Intermedio),
      new Curso(3, "Javascript Avanzado", 180, Niveles.Avanzado)
    ]
  }

  update(curso:Curso){
    let pos = this.read(curso)
    if(pos > -1) this.cursos[pos] = curso
  }

  private read(curso:Curso):number{
    let cur = this.cursos.find(c => c.id == curso.id)
    if(cur != undefined) return this.cursos.indexOf(cur)
    else return -1
  }
}
