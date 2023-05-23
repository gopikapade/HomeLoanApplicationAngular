import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private Http:HttpClient) { }

  validateLogin(username:string, password:string){
      return   this.Http.get("http://localhost:8080/menu/admin/"+username+"/"+password);
    }



}
