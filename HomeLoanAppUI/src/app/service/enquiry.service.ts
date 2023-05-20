import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  constructor(private http:HttpClient) { }

  saveenquiry(enquiryForm:FormGroup){

    return this.http.post("http://localhost:8080/enquiry/addenquiry",enquiryForm.value)
  }
}
