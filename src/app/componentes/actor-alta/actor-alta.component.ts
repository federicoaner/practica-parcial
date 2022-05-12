import { Component, OnInit,Input,Output } from '@angular/core';
import { FormGroup,AbstractControl,Validators,FormBuilder,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FirestoreService } from 'src/app/servicios/firestore.service';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.scss']
})
export class ActorAltaComponent implements OnInit {


  nombrePais:string="";
  //form:FormGroup;
  public forma : FormGroup;

  constructor(private fb: FormBuilder,private firestore: FirestoreService) {

    this.forma = this.fb.group({
     // 'nombre' : ['',[Validators.required, this.spacesValidator]],
      'nombre' : ['',Validators.required],
      'apellido' : ['',Validators.required],
      'pais' : ['',Validators.required],
      'terminos' : ['',Validators.required]
      
    });

   }


   public aceptar()
  {
    console.log(this.forma.getRawValue()); //json con todos los valores

    let nombreGuardado = this.forma.get('nombre')?.value;
    console.log(nombreGuardado)//Devuelve oslo el valor Jorge
  }


 

  recibirPais(pais: any): void {
    this.forma.get('pais')?.setValue(pais);
  }
  

  public spacesValidator(control : AbstractControl) :null | object{
    const nombre = <string>control.value;
    const spaces = nombre.includes(' ');

    return spaces ? {containsSpaces : true} : null;
  }

  agregarActor(){
    let actor: Actor = new Actor(this.forma.get('nombre')?.value, this.forma.get('apellido')?.value, this.forma.get('pais')?.value);
    console.log(actor);
    this.firestore.agregarActor({...actor});
    this.forma.reset();
  }


  ngOnInit(): void {
  }

}
