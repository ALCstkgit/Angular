import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormAlumnosComponent } from './form-alumnos/form-alumnos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { CrudAlumnosService } from './servicios/crud-alumnos.service';

@NgModule({
  declarations: [
    AppComponent,
    FormAlumnosComponent,
    ListaAlumnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [CrudAlumnosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
