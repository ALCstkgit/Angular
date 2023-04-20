import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CrudCursosService } from './servicios/crud-cursos.service';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { FormCursosComponent } from './form-cursos/form-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCursosComponent,
    FormCursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CrudCursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
