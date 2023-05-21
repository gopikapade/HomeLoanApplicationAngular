import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CibilService {

  constructor(private http:HttpClient) { }

getCibilCheck(enquiry)
{
  return this.http.post("http://localhost:8080/cibil/", enquiry);
}

addRemark(enquiry){
    return   this.http.put("http://localhost:8080/remarkadd/", enquiry)

}

}
