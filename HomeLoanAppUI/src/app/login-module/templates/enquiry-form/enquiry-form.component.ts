import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { EnquiryService } from 'src/app/service/enquiry.service';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.css']
})
export class EnquiryFormComponent implements OnInit {



  currentStep: number = 1;
  progressPercentage: number = 50;
  enquiryForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private enquiryservice:EnquiryService, private router:Router) {

  }
  ngOnInit() {
    this.enquiryForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNo: ['', Validators.required],
      pancardNo: ['', Validators.required],
      marrtialStatus: ['', Validators.required],
      income: ['', Validators.required],
      tenure:['', Validators.required],
      loanAmmount: ['', Validators.required],
        education:this.formBuilder.group({
          higherEducation:[]
     })
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

   console.log(this.enquiryForm.value)

    if (this.enquiryForm.valid) {
      this.enquiryservice.saveenquiry(this.enquiryForm).subscribe((data:any)=>{console.log(data)})
      this.router.navigate([''])
      alert("Responce Submitted Sucessfully")
      console.log(this.enquiryForm.value);

    } else {
      // Handle invalid form
      console.log('Invalid form');
    }


  }




}
