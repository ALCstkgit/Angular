import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo-hijo-padre',
  templateUrl: './hijo-hijo-padre.component.html',
  styleUrls: ['./hijo-hijo-padre.component.css']
})
export class HijoHijoPadreComponent {
  @Output() ev:EventEmitter<string> = new EventEmitter<string>()
  cad:string = ""

  enviar(){
    this.ev.emit(this.cad)
  }
}
