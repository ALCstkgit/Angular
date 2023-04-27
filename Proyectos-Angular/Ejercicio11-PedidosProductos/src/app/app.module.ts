import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormPedidoComponent } from './form-pedido/form-pedido.component';
import { FormProductosComponent } from './form-productos/form-productos.component';
import { InfoPedidosService } from './servicios/info-pedidos.service';

@NgModule({
  declarations: [
    AppComponent,
    FormPedidoComponent,
    FormProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [InfoPedidosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
