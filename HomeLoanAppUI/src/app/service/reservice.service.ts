import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ReserviceService {

  constructor(private http:HttpClient) { }

  saveLoanApplication(data:any){

    return this.http.post("http://localhost:8080/documents/adddocuments", data)

  }
  emailsend(data:any){


    return this.http.post("http://localhost:8080/mail/send",data.value)
  }


}
