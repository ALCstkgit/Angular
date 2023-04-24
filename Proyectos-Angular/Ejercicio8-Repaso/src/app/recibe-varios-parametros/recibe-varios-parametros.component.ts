import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recibe-varios-parametros',
  templateUrl: './recibe-varios-parametros.component.html',
  styleUrls: ['./recibe-varios-parametros.component.css']
})
export class RecibeVariosParametrosComponent {
  constructor(public parametros:ActivatedRoute){}
}
