import { Component } from '@angular/core';
import { CrudCursosService } from '../servicios/crud-cursos.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent {
  constructor(public crudCursosService:CrudCursosService){}
}
