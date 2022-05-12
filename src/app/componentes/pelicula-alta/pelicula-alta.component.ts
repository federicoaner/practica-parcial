import { Component, OnInit,Input,Output } from '@angular/core';
import { FormGroup,AbstractControl,Validators,FormBuilder,FormsModule,ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.scss']
})
export class PeliculaAltaComponent implements OnInit {


  public formB : FormGroup;
  actorNombre:string="";

  constructor(private fb: FormBuilder) { 

    this.formB = this.fb.group({
      'nombre' : ['',[Validators.required, this.spacesValidator]],
      
      'tipo' : ['',Validators.required],
      'fechaEstreno' : ['',Validators.required],
      'cantPublico' : ['',Validators.required],
      'actorNombre' : ['',Validators.required],
      'foto' : ['',Validators.required],
      //'terminos' : ['',Validators.required]
      
    });


    }




  ngOnInit(): void {
  }

  /*
  recibirPeli(nombreActor:any){

    this.nombreActor=nombreActor;

  }*/

 
  public spacesValidator(control : AbstractControl) :null | object{
    const nombre = <string>control.value;
    const spaces = nombre.includes(' ');

    return spaces ? {containsSpaces : true} : null;
  }

  public aceptar()
  {
    console.log(this.formB.getRawValue()); //json con todos los valores

    let nombreGuardado = this.formB.get('nombre')?.value;
    console.log(nombreGuardado)//Devuelve oslo el valor Jorge
  }


  recibirActor(actorNombre:any){

    this.actorNombre=actorNombre;
    alert(actorNombre);
  }
  




}
