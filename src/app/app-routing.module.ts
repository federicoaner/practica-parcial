import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './componentes/pelicula-listado/pelicula-listado.component';
import { PruebaApiComponent } from './componentes/prueba-api/prueba-api.component';

const routes: Routes = [

  {path: 'bienvenido', component: BienvenidoComponent},

  {path: '', redirectTo: '/busqueda', pathMatch: 'full'},
  {path: 'busqueda', component: BusquedaComponent},
  {path: 'peliculas/alta', component: PeliculaAltaComponent},
  {path: 'actor/alta', component: ActorAltaComponent},
  {path: 'actor/listado', component: ActorListadoComponent},
  {path: 'peliculas/listado', component: PeliculaListadoComponent},
  {path: 'busqueda/actor-alta', component: ActorAltaComponent},
  {path: 'busqueda/pelicula-alta', component: PeliculaAltaComponent},
  {path: 'prueba', component: PruebaApiComponent},
  


  
  /*
  {path:'peliculas',
 
        children:[
        {path:'alta',component:PeliculaAltaComponent},
      ]},

     
   {path:'actor', 
 
      children:[
      {path:'alta',component:ActorAltaComponent},
      {path:'listado',component:ActorListadoComponent},
    ]},


    {path:'peliculas',
 
    children:[
    {path:'listado',component:PeliculaListadoComponent},
  ]},
  */




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
