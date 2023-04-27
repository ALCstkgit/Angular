import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPedidoComponent } from './form-pedido/form-pedido.component';
import { FormProductosComponent } from './form-productos/form-productos.component';

const routes: Routes = [
  {path:"", component: FormPedidoComponent, children:[
    {path:"detalles/:id", component: FormProductosComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
