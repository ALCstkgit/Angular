import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { EventoComponent } from './evento/evento.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { ServicioComponent } from './servicio/servicio.component';
import { PasoUnParametroComponent } from './paso-un-parametro/paso-un-parametro.component';
import { RecibeUnParametroComponent } from './recibe-un-parametro/recibe-un-parametro.component';
import { PasoVariosParametrosComponent } from './paso-varios-parametros/paso-varios-parametros.component';
import { RecibeVariosParametrosComponent } from './recibe-varios-parametros/recibe-varios-parametros.component';

const routes: Routes = [
  {path:"interpolacion",component:InterpolacionComponent},
  {path:"oneWayBinding",component:OneWayBindingComponent},
  {path:"evento",component:EventoComponent},
  {path:"twoWayBinding",component:TwoWayBindingComponent},
  {path:"servicio",component:ServicioComponent},
  {path:"directivas",component:DirectivasComponent},
  {path:"pasarParametro",component:PasoUnParametroComponent},
  {path:"recibirParametro/:id",component:RecibeUnParametroComponent},
  {path:"pasarParametros",component:PasoVariosParametrosComponent},
  {path:"recibirParametros/:id",component:RecibeVariosParametrosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
