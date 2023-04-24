import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo-padre-hijo',
  templateUrl: './hijo-padre-hijo.component.html',
  styleUrls: ['./hijo-padre-hijo.component.css']
})
export class HijoPadreHijoComponent {
  @Input() cadena:string=""
}
