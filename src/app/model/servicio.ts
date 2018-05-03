/*clase para encapsular los atributos de una Receta*/
export class Servicio{
    id:number;
    nombre: string;
    disponible:boolean;
    
    //solo es posible un constructor
    constructor(
        nombre:string,
        disponible:boolean 
        )       
            
        {
        console.log('Servicios constructor');
        this.id=-1;
        this.nombre=nombre;
        this.disponible= disponible;  
        
        this.toString();
    }
    toString(){
        console.log(`Servicios nombre=${this.nombre}`)
    }
    
}   