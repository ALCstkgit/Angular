import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { FormsModule } from '@angular/forms';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { EventoComponent } from './evento/evento.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { ServicioComponent } from './servicio/servicio.component';
import { ServicioHolaMundoService } from './servicios/servicio-hola-mundo.service';
import { DirectivasComponent } from './directivas/directivas.component';
import { PasoUnParametroComponent } from './paso-un-parametro/paso-un-parametro.component';
import { RecibeUnParametroComponent } from './recibe-un-parametro/recibe-un-parametro.component';
import { PasoVariosParametrosComponent } from './paso-varios-parametros/paso-varios-parametros.component';
import { RecibeVariosParametrosComponent } from './recibe-varios-parametros/recibe-varios-parametros.component';
import { HijoPadreHijoComponent } from './hijo-padre-hijo/hijo-padre-hijo.component';
import { PadrePadreHijoComponent } from './padre-padre-hijo/padre-padre-hijo.component';
import { HijoHijoPadreComponent } from './hijo-hijo-padre/hijo-hijo-padre.component';
import { PadreHijoPadreComponent } from './padre-hijo-padre/padre-hijo-padre.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolacionComponent,
    OneWayBindingComponent,
    EventoComponent,
    TwoWayBindingComponent,
    ServicioComponent,
    DirectivasComponent,
    PasoUnParametroComponent,
    RecibeUnParametroComponent,
    PasoVariosParametrosComponent,
    RecibeVariosParametrosComponent,
    HijoPadreHijoComponent,
    PadrePadreHijoComponent,
    HijoHijoPadreComponent,
    PadreHijoPadreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServicioHolaMundoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
