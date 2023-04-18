import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormProductoComponent } from './form-producto/form-producto.component';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { FormsModule } from '@angular/forms';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';
import { FormPedidosComponent } from './form-pedidos/form-pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    FormProductoComponent,
    ListaProductoComponent,
    ListaPedidosComponent,
    FormPedidosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
