import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-hijo-padre',
  templateUrl: './padre-hijo-padre.component.html',
  styleUrls: ['./padre-hijo-padre.component.css']
})
export class PadreHijoPadreComponent {
  cadena:string=""

  recibirCad(cad:string){
    this.cadena = cad
  }
}
