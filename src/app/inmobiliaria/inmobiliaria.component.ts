import { Component, OnInit } from '@angular/core';
import { Casa } from '../model/casa';

@Component({
  selector: 'app-inmobiliaria',
  templateUrl: './inmobiliaria.component.html',
  styleUrls: ['./inmobiliaria.component.scss']
})
export class InmobiliariaComponent implements OnInit {
casa:Casa;
  constructor() {
    console.log('InmobiliariaComponet constructor');
   }

  ngOnInit() {
    console.log('InmobiliariaComponet ngOnInit');
  }

  recibirCasa(event){
    console.log('InmobiliariaComponent: recibirCasa %o', event.casa );               
    
    this.casa = event.casa;   
  }

}
