import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { FormCursosComponent } from './form-cursos/form-cursos.component';

const routes: Routes = [
  {path:"", component:ListaCursosComponent, children:[
    {path:"mod/:id", component:FormCursosComponent},
    {path:"alta", component:FormCursosComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
