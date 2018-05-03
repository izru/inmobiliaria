import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//librerias para formulario
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Importar HttpClientModule
import {HttpClientModule} from '@angular/common/http';

//importar servicio
import { ServicioService } from './providers/servicio.service';

//importar filtros
import { Filter } from './pipes/filter.pipe';

import { AppComponent } from './app.component';
import { InmobiliariaComponent } from './inmobiliaria/inmobiliaria.component';
import { MaestroComponent } from './maestro/maestro.component';
import { DetalleComponent } from './inmobiliaria/detalle/detalle.component';







@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,    
    MaestroComponent,
    InmobiliariaComponent,
    Filter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule,
    ServicioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
