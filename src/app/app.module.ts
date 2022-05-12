import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './componentes/pelicula-listado/pelicula-listado.component';

import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { TablapeliculaComponent } from './componentes/tablapelicula/tablapelicula.component';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { PruebaApiComponent } from './componentes/prueba-api/prueba-api.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { ActorTablaComponent } from './componentes/actor-tabla/actor-tabla.component';
import { AngularFireModule } from '@angular/fire/compat';

import { environment } from '../environments/environment';
//import { config } from 'process';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculaListadoComponent,
   // PeliculaComponent,
    BienvenidoComponent,
   TablapeliculaComponent,
   DetallePeliculaComponent,
   PruebaApiComponent,
   TablaPaisesComponent,
   ActorTablaComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
