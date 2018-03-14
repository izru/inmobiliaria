
//import { Servicios } from "./servicio";

/*clase para encapsular los atributos de una Receta*/
export class Casa{
    id:number;
    nombre: string;
    foto:string; 
    direccion:string;
    precio:number;
    habitaciones:number;
    alquiler:boolean;
    
   // servicios:Servicios[] ;
    //solo es posible un constructor
    constructor(nombre:string 
        )       
            
        {
        console.log('Casa constructor');
        this.id=-1;
        this.nombre=nombre;
        this.foto= '';  
        this.precio=0;
        this.habitaciones=1;
        this.direccion='Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem ipsum repellat consectetur deserunt doloribus sequi explicabo laudantium, deleniti, id totam, neque laborum debitis quia doloremque officiis incidunt labore ut.';
        this.alquiler=false;  
        //this.servicios=[];
        this.toString();
    }
    toString(){
        console.log(`Casa nombre=${this.nombre}`)
    }
    //addIngrediente(servicio:Servicios){
    //    this.servicios.push(servicio);
    //}
}   