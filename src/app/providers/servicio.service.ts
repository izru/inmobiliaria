import { Injectable } from '@angular/core';
import { Casa } from '../model/casa';
import { MOCK_CASAS } from './mocks.casas';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServicioService {
//casas:Casa[];
  constructor(public http: HttpClient) // inyectamos el objeto HttpClient, y asi podemos usar la variable http para usar ajax
  {
    console.log ("ServicioService constructor");
  }
  getTodos():Observable<any>{
    //observable, permite recoger los datos al vuelo
    let url=`http://localhost:3000`+`/casas`;   
    console.log(`ServicioService getTodos ${url}`);
    return this.http.get(url);
  }

  delete(id){
    let url = `http://localhost:3000` + '/casas/'+id;
    console.log(`TodosService delete ${url}`);
    return this.http.delete(url);
  }

 update(todo:Casa){
    let url = `http://localhost:3000` + '/casas/'+todo.id;
    
    console.log(`TodosService update ${url}`);
    
    let body = {      
     // "completed": !todo.completed    
    } 
  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.patch( url, body , httpOptions );
  }

  post(todo:Casa){
    let url = `http://localhost:3000` + '/casas/';
    console.log(`TodosService put ${url}`);

    let body = {
                  // "id": todo.id,
                 // "userId": todo.idUser,
                 // "title": todo.title,
                  //"completed": todo.completed    
                } 
              
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post( url, body , httpOptions );
  }

}