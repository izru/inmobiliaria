import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//librerias para formulario
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Importar HttpClientModule
import {HttpClientModule} from '@angular/common/http';

//importar servicio
import { ServicioService } from './providers/servicio.service';



import { AppComponent } from './app.component';
import { InmobiliariaComponent } from './inmobiliaria/inmobiliaria.component';
import { MaestroComponent } from './maestro/maestro.component';
import { ResultadoComponent } from './inmobiliaria/resultado/resultado.component';

import { DetalleComponent } from './inmobiliaria/detalle/detalle.component';






@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,
  
    ResultadoComponent,
    MaestroComponent,
    InmobiliariaComponent
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
