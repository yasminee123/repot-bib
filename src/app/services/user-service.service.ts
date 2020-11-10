import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private addUserUrl = 'http://localhost:3000/add';
  
  constructor(private http:HttpClient) { }
 
  /*getAllUsers(){
    let data=this.http.get<any>("https://jsonplaceholder.typicode.com/todos")
    return data;
  }*/

//Ajouter un utilisateur,cette méthode prend en paramétre l'objet user qu'on lui associera une classe ultérieurement
  addUser(user) {
    //Cette méthode utilise le REST API post à l'aide du protocole http
    let data = this.http.post<any>(this.addUserUrl, user);
    return data;
  }
}
