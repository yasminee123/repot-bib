import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }
  getAllUsers(){
    let data=this.http.get<any>("https://jsonplaceholder.typicode.com/todos")
    return data;
  }
}
