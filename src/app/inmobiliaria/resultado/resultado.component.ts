import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Casa } from '../../model/casa';
import { ServicioService } from '../../providers/servicio.service';


@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {

  id:string;
  casas: Casa[];
  @Output() eventoEmitir = new EventEmitter();
  constructor(public servicioService:ServicioService) {
    console.log('ResultadoComponent constructor');
    this.id="2";
   }

  ngOnInit() {
    console.log('ResultadoComponent ngOnInit');
    this.cargarTareas();
  }

  cargarTareas(){
    console.log('ResultadoComponent cargarTareas');
    this.casas = [];
    this.servicioService.getTodos().subscribe(
      resultado => {
        console.debug('peticion correcta %o', resultado);
        this.mapeo(resultado);        
      },
      error=>{
        console.warn('peticion incorrecta %o', error);
      }
    );//subscribe
    
  }

  //mapea los resultados json a todos que provienen del servicio rest
  mapeo(resultado:any){
    let casa:Casa;
    resultado.forEach(el =>{
      casa=new Casa(el.nombre);
      casa.alquiler=el.alquiler;
      casa.habitaciones=el.habitaciones;
      casa.foto=el.foto;
      casa.direccion=el.direccion;
      casa.precio=el.precio;
      
      console.log(casa.nombre);

      this.casas.push(casa);
    });

  }

   /** 
   * funcion para emitir el eventos desde el hijo hacia el padre
   **/
  seleccionar( event, casa : Casa){
    console.log('ListadoComponent Emitimos evento al ComponentePadre %o', casa );
    this.eventoEmitir.emit(  //event con 2 parametros
                              {
                                 "casa": casa 
                                 
                              }
                          );
  } 

}


      
      /*
      "servicios": [
        { "nombre": "tv","disponible": true },
        { "nombre": "wc","disponible": true },
        { "nombre": "jardin","disponible": true },
        { "nombre": "cocina","disponible": true }   */