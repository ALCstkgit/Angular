import { Component } from '@angular/core';
import { ServicioHolaMundoService } from '../servicios/servicio-hola-mundo.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent {
  constructor(private servicioHola:ServicioHolaMundoService){

  }
  ngOnInit(){
    alert(this.servicioHola.holaMundo())
  }
}
