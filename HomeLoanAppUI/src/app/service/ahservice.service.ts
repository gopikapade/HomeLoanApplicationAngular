import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AhserviceService {

  constructor(private http: HttpClient) { }


  createCustomerAccount(data: any): Observable<any> {

    return this.http.post("http://localhost:8080/customeraccount/createcustomeraccount", data)

  }

  viewCustomerData() {

    return this.http.get("http://localhost:8080/customeraccount/getalldata")
  }

}


