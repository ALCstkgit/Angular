import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ArraysUnionesEnumsComponent } from './arrays-uniones-enums/arrays-uniones-enums.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { FormPacientesComponent } from './form-pacientes/form-pacientes.component';
import { FormMedicosComponent } from './form-medicos/form-medicos.component';
import { ListaMedicosComponent } from './lista-medicos/lista-medicos.component';

@NgModule({
  declarations: [
    AppComponent,
    ArraysUnionesEnumsComponent,
    DirectivasComponent,
    ListaPacientesComponent,
    FormPacientesComponent,
    FormMedicosComponent,
    ListaMedicosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
