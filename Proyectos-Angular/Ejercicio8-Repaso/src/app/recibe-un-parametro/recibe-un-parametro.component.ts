import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recibe-un-parametro',
  templateUrl: './recibe-un-parametro.component.html',
  styleUrls: ['./recibe-un-parametro.component.css']
})
export class RecibeUnParametroComponent {
  constructor(public parametro : ActivatedRoute){
  }
}
