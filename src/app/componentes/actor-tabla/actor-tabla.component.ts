import { Component, OnInit } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import { FirestoreService } from 'src/app/servicios/firestore.service';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-actor-tabla',
  templateUrl: './actor-tabla.component.html',
  styleUrls: ['./actor-tabla.component.scss']
})
export class ActorTablaComponent implements OnInit {

  actores:Actor[]=[];

  @Output() nombreOutput: EventEmitter<any>= new EventEmitter<any>();

  constructor(firestore:FirestoreService) { 

     firestore.getActores().subscribe( (val: any) =>{
      for(let actor of val)
      {
        this.actores.push(actor);
      }
    })

    /*
    this.actores = [
      { nombre:"Sean",apellido: "connery", pais: "irlanda" },
      { nombre:"arnold",apellido: "schaezeneger", pais: "alemania"},
    ];
    */


  }



  enviarNombreActor (actorNombre:string, actorApellido:string){
     
    console.log (actorNombre);
    this.nombreOutput.emit(actorNombre + " " + actorApellido);
 
   }

  ngOnInit(): void {
  }

}
