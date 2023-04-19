import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FacturasService } from './servicios/facturas.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormFacturasComponent } from './form-facturas/form-facturas.component';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { InfoComponent } from './info/info.component';
import { ContactarComponent } from './contactar/contactar.component';

@NgModule({
  declarations: [
    AppComponent,
    FormFacturasComponent,
    InicioComponent,
    InfoComponent,
    ContactarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [FacturasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
