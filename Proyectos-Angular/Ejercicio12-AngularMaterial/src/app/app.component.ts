import { Component } from '@angular/core';
import { MenusService } from './servicios/menus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio12-AngularMaterial';
  constructor(public menS:MenusService){}
}
