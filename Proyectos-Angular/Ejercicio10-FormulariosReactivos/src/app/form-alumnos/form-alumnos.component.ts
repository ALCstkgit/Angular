import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Alumno } from '../modelo/alumno';
import { CrudAlumnosService } from '../servicios/crud-alumnos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-alumnos',
  templateUrl: './form-alumnos.component.html',
  styleUrls: ['./form-alumnos.component.css']
})
export class FormAlumnosComponent{
  form : FormGroup
  al: Alumno
  //id:number
  dis:boolean

  constructor(private crudAl:CrudAlumnosService, private router:ActivatedRoute, private route:Router){
  }

  ngOnInit(){
    this.router.params.subscribe(
      (val) => {
        let i = val['id']
        this.crudAl.buscarAlumno(i).subscribe(
          (alu) => {
            this.al = alu
            this.form = new FormGroup({
              id: new FormControl({value:this.al.id,disabled:!this.comprobarId()}),
              dni: new FormControl(this.al.dni),
              nombre: new FormControl(this.al.nombre),
              hrs: new FormControl(this.al.hrs),
            })
          }
        )
      }
    )
  }

  funBtn(){
    this.cambiarDatos()
    this.comprobarId()?this.crudAl.create(this.al):this.crudAl.update(this.al)
    this.route.navigate(['/'])
  }

  private comprobarId():boolean{
    return this.router.snapshot.params['id'] == undefined
  }

  private cambiarDatos(){
    this.form.controls['id'].enable()
    this.al.id = this.form.value.id
    this.al.dni = this.form.value.dni
    this.al.nombre = this.form.value.nombre
    this.al.hrs = this.form.value.hrs
  }
}