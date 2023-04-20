import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from '../modelo/curso';
import { Niveles } from '../modelo/niveles';
import { CrudCursosService } from '../servicios/crud-cursos.service';

@Component({
  selector: 'app-form-cursos',
  templateUrl: './form-cursos.component.html',
  styleUrls: ['./form-cursos.component.css']
})
export class FormCursosComponent {
  curso:Curso
  niveles:string[]

  constructor(private ruta:ActivatedRoute,private router:Router, private crudService:CrudCursosService){
    this.curso=new Curso(ruta.snapshot.params['id'],"",0,Niveles.Iniciacion)
    this.niveles = Object.values(Niveles)
  }

  mod(){
    this.crudService.update(this.curso)
    this.router.navigate(["/"])
  }
}
