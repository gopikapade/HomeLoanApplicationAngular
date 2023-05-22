import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {


  constructor(private http:HttpClient) { }

  saveenquiry(enquiryForm:FormGroup){
   return this.http.post("http://localhost:8080/enquiry/addenquiry", enquiryForm.value)
   }

  getEnqiries(){
     return this.http.get("http://localhost:8080/enquiry/getenquiry")
  }

  oeForward(id, enquiry){
    return   this.http.put("http://localhost:8080/enquiry/oeForward/"+id, enquiry)
  }

  oeGetEnquiries(){
     return this.http.get("http://localhost:8080/enquiry/oeGetEnquiries")
  }

  deleteEnquiry(id: number) {
    return this.http.delete("http://localhost:8080/enquiry/deleteEnquiries/"+id)
  }

}
