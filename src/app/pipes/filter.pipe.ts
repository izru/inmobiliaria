import { Pipe, PipeTransform } from '@angular/core';

import { Casa } from '../model/casa';
@Pipe({
  name: 'filtrosRecetas'
})
export class Filter implements PipeTransform {
/**
 * filtro para buscar en una coleccion de coches. no es CaseSensitive
 * @param listaCasas : Coche[] array o coleccion de coches
 * @param searchText : string con la marca o modelo de coche
 */
  transform(listaCasas: Casa[], searchText: string, alquiler:boolean, precioMax:number, precioMin:number): Casa[] {

    console.log(`Activado filtro de alquiler ${alquiler}`);
    //si no hay recetas retornar vacio
    if (!listaCasas) return [];

    let casasFilterArray: Casa[] = [];

    //Filtramos si llevan gluten o no
    if (alquiler) {
      listaCasas.forEach(it => {
        if (it.alquiler) {
          casasFilterArray.push(it);
        }
      });
    } else {
      casasFilterArray = listaCasas;
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