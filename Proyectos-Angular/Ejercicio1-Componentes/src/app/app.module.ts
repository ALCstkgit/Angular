import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Componente1QueenComponent } from './componente1-queen/componente1-queen.component';
import { Componente2TypescriptComponent } from './componente2-typescript/componente2-typescript.component';
import { Componente3FundamentosComponent } from './componente3-fundamentos/componente3-fundamentos.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1QueenComponent,
    Componente2TypescriptComponent,
    Componente3FundamentosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
