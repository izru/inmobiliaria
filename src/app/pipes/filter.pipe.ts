import { Pipe, PipeTransform } from '@angular/core';

import { Casa } from '../model/casa';
@Pipe({
  name: 'filtrosCasas'
})
export class Filter implements PipeTransform {
/**
 * filtro para buscar en una coleccion . no es CaseSensitive
 * @param listaCasas : Casa[] array o coleccion de casas
 * @param searchText : string con la nombre o direccion
 */
  transform(listaCasas: Casa[], searchText: string, alquiler:boolean, venta:boolean, precioMax:number =0, precioMin:number =0): Casa[] {
    if(!precioMin) precioMin=0;
    if(!precioMax) precioMax=0;
    console.log(`Activado filtro de alquiler ${alquiler}`);
    console.log('precioMin %n',precioMin);
    console.log('precioMax %n', precioMax);

    //si no hay recetas retornar vacio
    if (!listaCasas) return [];

    let casasFilterArray: Casa[] = [];

    switch(alquiler) { 
      case true: { 
         if (venta){
          casasFilterArray = listaCasas;
         }         
         else{          
          listaCasas.forEach(it => {
            if (it.alquiler) {
              casasFilterArray.push(it);
            }
          });
        }
         break;         
      } 
      case false: { 
        if (venta){
          listaCasas.forEach(it => {
            if (!it.alquiler) {
              casasFilterArray.push(it);
            }
          });
         } 
         break; 
      } 
      default: { 
        
         break; 
      } 
   } 
 
   if (precioMin ==0 && precioMax == 0)
   {
    casasFilterArray = listaCasas;
   }
   else if (precioMax>precioMin) {
    listaCasas.forEach(it => {
      if (it.precio >= precioMin && it.precio <=precioMax) {
        casasFilterArray.push(it);
      }      
    });
   } 
   else if(precioMax==0 && precioMin>0){
     console.log('entra');
    listaCasas.forEach(it => {      
      if (it.precio >= precioMin ) {
        casasFilterArray.push(it);
      }
    });

   }
   
  

    //De los que quedan filtramos por texto si hay
    if (!searchText) {
      return casasFilterArray;
    } else {
      searchText = searchText.toLowerCase();
      let casa = '';
      return casasFilterArray.filter(it => {
        casa = it.nombre + it.direccion;
        casa = casa.toLowerCase();
        return casa.includes(searchText);
      });
    }
  }

}