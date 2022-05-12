import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Peliculas } from 'src/app/clases/peliculas';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  //peliculaRecibida:Peliculas|any;
  //@Input() listadoPrincipal: Peliculas[] ;
  
  @Output() listadodesdeBusqueda: EventEmitter<any>= new EventEmitter<any>();

  listadoPeliculas :Peliculas [];
  banderaClick=false
  peliculaParaMostrar:Peliculas;

  constructor() { 

    this.listadoPeliculas = [
      { id: 1 ,nombre:"lo que el viento se llevo",tipo: "amor", fechaEstreno: "12/12/2021", cantidadPublico: 123, actor: "roberto de niro" },
      { id: 2 ,nombre:"freddie",tipo: "terror", fechaEstreno: "12/12/2021", cantidadPublico: 123, actor: "oscar gomez" },
    ];
    
    this.peliculaParaMostrar=new Peliculas(1,"Peli Por Defecto","12/12/2020",123123,"","Robert de niro");

    
  }

 recibirClick(mensaje:any){
  
   
   this.banderaClick=mensaje;
 }

 tomarPeliculaParaDetalles(NuevaPeli :Peliculas){

 
    this.peliculaParaMostrar=NuevaPeli;   
  

 }




 
  /*
  recibirPelicula(pelicula: any){
    this.peliculaRecibida = pelicula;
  }
  */

  

  /*
  tomarAlumnoCreado(listadoPeliculas: Peliculas|any)
  {
    this.listadoPrincipal.push(listadoPeliculas);   
    console.info("recibi de LISTADOPELICULAS en BUSQUE" + listadoPeliculas);
  }

  */


  ngOnInit(): void {
  }

}
