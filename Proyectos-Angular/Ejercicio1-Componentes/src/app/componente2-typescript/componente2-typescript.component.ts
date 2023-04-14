import { Component } from '@angular/core';

@Component({
  selector: 'app-componente2-typescript',
  templateUrl: './componente2-typescript.component.html',
  styleUrls: ['./componente2-typescript.component.css']
})
export class Componente2TypescriptComponent {
  num1 : number = 5
  cad1 : string = "hola"
  cad2 : string = 'hola2'
  //Los acentos invertidos te permiten introducir directamente el valor de las variables
  cad3 : string = `${this.cad1}
  ${this.cad2}
  hola3`
  b : boolean = true
  nu : any = null
  un : undefined
  ngOnInit(){
    console.log(this.mostrarInfo(this.num1));
    console.log(this.num1)
    console.log(this.cad1)
    console.log(this.cad2)
    console.log(this.cad3)
    console.log(this.b)
    console.log(this.nu)
    console.log(this.un)
  }

  mostrarInfo(num:number){
    return num + this.cad1;
  }
}
