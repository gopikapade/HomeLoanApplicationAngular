import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.css']
})
export class EnquiryFormComponent implements OnInit {



  currentStep: number = 1;
  progressPercentage: number = 50;
  enquiryForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
   
  }
  ngOnInit() {
    this.enquiryForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: [null, Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNo: ['', Validators.required],
      pancardNo: ['', Validators.required],
      maritalStatus: ['single', Validators.required],
      income: [null, Validators.required],
      loanAmount: [null, Validators.required],
      education: ['', Validators.required]
    }); 
   
  }




  next() {
    this.currentStep = 2;
    this.progressPercentage = 100;
  }

  previous() {
    this.currentStep = 1;
    this.progressPercentage = 50;
  }

  submitForm() {
    if (this.enquiryForm.valid) {
      // Form submission logic here
      console.log(this.enquiryForm.value);
    } else {
      // Handle invalid form
      console.log('Invalid form');
    }
  }




}
