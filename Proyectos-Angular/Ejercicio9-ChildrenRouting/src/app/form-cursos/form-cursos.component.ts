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
export class FormCursosComponent{
  curso:Curso
  niveles:string[]
  dis:boolean

  constructor(private ruta:ActivatedRoute,private router:Router, private crudService:CrudCursosService){
    this.curso= this.curso=new Curso(0,"",0,Niveles.Iniciacion)
    this.niveles = Object.values(Niveles)
    this.dis = !this.comprobarId()
  }

  ngOnInit(){
    this.ruta.params.subscribe((val) =>
      this.curso=new Curso((this.comprobarId()==true?0:val['id']),"",0,Niveles.Iniciacion)
    )
  }

  funBtn(){
    if(this.comprobarId()) this.crudService.create(this.curso)
    else this.crudService.update(this.curso)

    this.router.navigate(["/"])
  }

  private comprobarId():boolean{
    return this.ruta.snapshot.params['id'] == undefined
  }
}
