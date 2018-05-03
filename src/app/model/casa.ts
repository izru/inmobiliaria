import { Servicio } from "./servicio";

/*clase para encapsular los atributos de una Receta*/
export class Casa{
    id:number;
    nombre: string;
    foto:string; 
    direccion:string;
    precio:number;
    habitaciones:number;
    alquiler:boolean;
    
    servicios:Servicio[] ;
    //solo es posible un constructor
    constructor( )       
            
        {
        console.log('Casa constructor');
        this.id=-1;
        this.nombre="";
        this.foto= '';  
        this.precio=0;
        this.habitaciones=1;
        this.direccion='Lorem ipsum dolor sit amet consectetur adipisicing elit. Et autem ipsum repellat consectetur deserunt doloribus sequi explicabo laudantium, deleniti, id totam, neque laborum debitis quia doloremque officiis incidunt labore ut.';
        this.alquiler=false;  
        this.servicios=[];        
    }
    fromJson(json:any)
    {        
        this.nombre=json.nombre;
        this.foto =json.foto;
        this.precio=json.precio;
        this.direccion=json.precio;
        this.servicios=json.servicios;

        let servicio ;
        json.servicios.forEach(elS =>{
            servicio=new Servicio(elS.nombre, elS.disponible);
            this.servicios.push(servicio);         
        });
        return this;
    }
}   