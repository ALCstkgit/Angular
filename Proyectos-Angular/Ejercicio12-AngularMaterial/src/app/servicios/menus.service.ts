import { Injectable } from '@angular/core';
import { Menu } from '../modelo/menu';

@Injectable({
  providedIn: 'root'
})
export class MenusService {
  menus:Menu[]
  constructor() {
    this.menus = [
      new Menu("Inicio","home", "/"),
      new Menu("Examenes","library_books", "/examenes"),
      new Menu("Pacientes","accessibility","/pacientes"),
      new Menu("Registro","create","/registro"),
    ]
  }
}
