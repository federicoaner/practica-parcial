import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit {

  paises:any=[];
  @Output() paisOutput: EventEmitter<any>= new EventEmitter<any>();
  
  
  constructor(private Api:ApiService) { 

    this.Api.getPaises().subscribe((data:any)=>{    //retorna observable

      console.log(data);
      this.paises=data;
    
     }); 


  }

  enviarNombrePais (paisNombre:string){
     
    console.log (paisNombre);
    this.paisOutput.emit(paisNombre);
 
   }



  ngOnInit(): void {
  }

}
