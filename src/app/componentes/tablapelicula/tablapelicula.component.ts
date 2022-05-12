import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Peliculas } from 'src/app/clases/peliculas';

@Component({
  selector: 'app-tablapelicula',
  templateUrl: './tablapelicula.component.html',
  styleUrls: ['./tablapelicula.component.scss']
})
export class TablapeliculaComponent implements OnInit {


  //listadoPeliculas: Peliculas [] ;
  @Input() listadoPeliculas:Peliculas [];
  @Output() peliculaSeleccionada: EventEmitter<any>= new EventEmitter<any>(); 


  constructor() {
  
   this.listadoPeliculas=[];
   }


   mostrarDetalles(unaPelicula:Peliculas)
   {
     console.info("mostrar detalles",unaPelicula);
     this.peliculaSeleccionada.emit(unaPelicula);
   }
  



  ngOnInit(): void {
    
  }

}
