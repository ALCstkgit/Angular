import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { FormAlumnosComponent } from './form-alumnos/form-alumnos.component';

const routes: Routes = [
  {path:"",component:ListaAlumnosComponent, children:[
    {path:"mod/:id",component:FormAlumnosComponent},
    {path:"alta",component:FormAlumnosComponent}]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
