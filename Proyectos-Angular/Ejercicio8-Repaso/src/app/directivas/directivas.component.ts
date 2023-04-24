import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
  b:boolean=false
  arr = Object.values(Elementos)
  persona: string = ""
}
export enum Elementos{
  El1 = "Elemento1",
  El2 = "Elemento2",
  El3 = "Elemento3",
  El4 = "Elemento4",
}