import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioHolaMundoService {

  constructor() { }

  holaMundo():string{
    return "Hola Mundo"
  }
}
