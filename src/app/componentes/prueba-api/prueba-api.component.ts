import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';


@Component({
  selector: 'app-prueba-api',
  templateUrl: './prueba-api.component.html',
  styleUrls: ['./prueba-api.component.scss']
})
export class PruebaApiComponent implements OnInit {

  paises:any=[];

  pais:string="";

  constructor(private Api:ApiService) { 
 
  this.Api.getPaises().subscribe((data:any)=>{    //retorna observable

  console.log(data);
  this.paises=data;

 }); 

  // this.paises=this.Api.getPaises();

  }

  algo (pais:string){
     
   alert (pais);

  }

  ngOnInit(): void {
  }

}
