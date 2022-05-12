import { Component, OnInit,Input,Output } from '@angular/core';
import { Peliculas } from 'src/app/clases/peliculas';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss']
})
export class DetallePeliculaComponent implements OnInit {

 
  @Input() unaPelicula:Peliculas;

  constructor() {
    this.unaPelicula=new Peliculas(1,"Duro de matar","",123,"","");
   }

  ngOnInit(): void {
  }

}
