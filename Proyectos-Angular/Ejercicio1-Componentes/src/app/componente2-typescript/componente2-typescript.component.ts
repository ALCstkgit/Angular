import { Component } from '@angular/core';

@Component({
  selector: 'app-componente2-typescript',
  templateUrl: './componente2-typescript.component.html',
  styleUrls: ['./componente2-typescript.component.css']
})
export class Componente2TypescriptComponent {
  num1 : number = 5
  cad : string = "hola"
  ngOnInit(){
    console.log(this.mostrarInfo(this.num1));
  }

  mostrarInfo(num:number){
    return num + this.cad;
  }
}
