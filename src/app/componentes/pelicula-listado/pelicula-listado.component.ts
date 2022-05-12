import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Peliculas } from 'src/app/clases/peliculas';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.scss']
})
export class PeliculaListadoComponent implements OnInit {

   // listadoPeliculas: Peliculas [] ;
  //@Output() peliculaSeleccionada: EventEmitter<any>= new EventEmitter<any>();
  @Output() mensajeOutput: EventEmitter<any>= new EventEmitter<any>();
  @Input() listadoPeliculas:Peliculas [];
  bandera:boolean;
  mensaje:string;
  banderaListado:boolean=true;
  bandera2:boolean=false;

  constructor() { 

    this.listadoPeliculas=[];
    this.bandera=false;
    this.mensaje="hola";

  }
/*
  mostrarDetalles(unaPelicula:Peliculas)
  {
    console.info("mostrar detalles",unaPelicula);
    this.peliculaSeleccionada.emit(unaPelicula);
  }*/
/*
  enviarpeliculasTabla(listadoPeliculas:any){
    console.log(this.listadoPeliculas)
   this.listadoOuput.emit(listadoPeliculas);
   this.bandera=true;
   
  }*/

  mandarClick(){
    this.banderaListado=false;
    this.bandera2=true;
    this.mensajeOutput.emit(this.bandera2);
  }

  ngOnInit(): void {
  }

}
