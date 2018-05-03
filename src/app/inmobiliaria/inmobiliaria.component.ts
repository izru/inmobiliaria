import { Component, OnInit } from '@angular/core';
import { Casa } from '../model/casa';
import { ServicioService } from '../providers/servicio.service';
import { Servicio } from '../model/servicio';

@Component({
  selector: 'app-inmobiliaria',
  templateUrl: './inmobiliaria.component.html',
  styleUrls: ['./inmobiliaria.component.scss']
})
export class InmobiliariaComponent implements OnInit {
casa:Casa;
casas: Casa[];
  constructor(public servicioService:ServicioService) {
    console.log('InmobiliariaComponet constructor');
   }

  ngOnInit() {
    console.log('InmobiliariaComponet ngOnInit');
    this.cargarTareas();
    
  }

  recibirCasa(event){
    console.log('InmobiliariaComponent: recibirCasa %o', event.casa );               
    
    this.casa = event.casa;   
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
    let servicio:Servicio;
    let elemServicios:Servicio[];

    resultado.forEach(el =>{
      casa=new Casa();
      casa.nombre=el.nombre;
      casa.alquiler=el.alquiler;
      casa.habitaciones=el.habitaciones;
      casa.foto=el.foto;
      casa.direccion=el.direccion;
      casa.precio=el.precio;

      elemServicios =[];
      el.servicios.forEach(elS =>{
        servicio=new Servicio(elS.nombre, elS.disponible);
        elemServicios.push(servicio);
      
      casa.servicios=elemServicios;
        
      });
      
      console.log(casa.nombre);

      this.casas.push(casa);
    });

  }

   /** 
   * funcion para emitir el eventos desde el hijo hacia el padre
   **/
  seleccionar( event, casa : Casa){
    console.log('ListadoComponent Emitimos evento al ComponentePadre %o', casa );
    this.casa =casa;
  } 

  /*mapeo(jsonData:any):any{
    let casa:Casa;
    jsonData.array.forEach(element => {
      this.casas.push(element);
      
    });*/

  }

