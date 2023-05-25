import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AhService {
  constructor(private http:HttpClient) { }

   getAllSanctionsLoan(){
    return this.http.get("http://localhost:8080/documents/allSanctionLoan")
   }


}
