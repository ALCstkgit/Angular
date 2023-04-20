import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarruselComponent } from './carrusel/carrusel.component';
import { BlogComponent } from './blog/blog.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  {path:"",component:CarruselComponent},
  {path:"blog",component:BlogComponent},
  {path:"formulario",component:FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
