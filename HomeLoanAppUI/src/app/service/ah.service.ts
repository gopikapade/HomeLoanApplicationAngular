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

  getAllLoanAcounts(){

     return this.http.get("http://localhost:8080/customeraccount/getalldata")

  }

  proceedeDisbustment(id:number, disburstment:any)
  {
     return this.http.put("http://localhost:8080/loandis/disbust/"+id, disburstment);
  }


}
