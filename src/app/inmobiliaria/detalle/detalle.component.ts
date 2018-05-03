import { Component, OnInit, Input } from '@angular/core';
import { Casa } from '../../model/casa';
import { ServicioService } from '../../providers/servicio.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit { 

  @Input('casaParametro') casa:Casa;
  id:string;


  constructor(public servicioService:ServicioService) {
    console.log('DetalleComponent constructor');
    this.casa=new Casa() ;
    this.id="2";
   }

  ngOnInit() {
    console.log('DetalleComponent ngOnInit');
  }

}
