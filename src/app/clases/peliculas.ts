export class Peliculas {
   
    id: number;
    nombre: string;
    tipo: string;
    fechaEstreno: string;
    cantidadPublico: number;
   // foto: string;
    actor: string;

    constructor(id: number, nombre: string, fechaEstreno: string, cantidadPublico: number, foto: string, actor: string)
    {
        this.id = id;
        this.nombre = nombre;
        this.tipo = "algo";
        this.fechaEstreno = fechaEstreno
        //this.foto = foto;
        this.cantidadPublico = cantidadPublico;
        this.actor = actor;
    }

}
