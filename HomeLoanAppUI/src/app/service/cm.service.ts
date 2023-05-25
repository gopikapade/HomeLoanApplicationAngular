import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CmService {

  constructor(private http:HttpClient) { }

  getAllsanctionLetters(){
     return this.http.get("http://localhost:8080/documents/getSanctionLetters")
  }
}
