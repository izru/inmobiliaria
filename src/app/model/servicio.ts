/*clase para encapsular los atributos de una Receta*/
export class Servicios{
    id:number;
    nombre: string;
    disponible:boolean;
    
    //solo es posible un constructor
    constructor(nombre:string 
        )       
            
        {
        console.log('Servicios constructor');
        this.id=-1;
        this.nombre=nombre;
        this.disponible= true;  
        
        this.toString();
    }
    toString(){
        console.log(`Servicios nombre=${this.nombre}`)
    }
    
}   