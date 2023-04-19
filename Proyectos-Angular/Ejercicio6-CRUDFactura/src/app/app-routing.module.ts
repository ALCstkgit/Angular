import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormFacturasComponent } from './form-facturas/form-facturas.component';
import { ContactarComponent } from './contactar/contactar.component';
import { InfoComponent } from './info/info.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path:'crud', component:FormFacturasComponent},
  {path:'contactar', component:ContactarComponent},
  {path:'info', component:InfoComponent},
  {path:'inicio', component:InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
