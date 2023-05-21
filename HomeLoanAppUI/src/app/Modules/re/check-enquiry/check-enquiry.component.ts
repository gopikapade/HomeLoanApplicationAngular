import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Enquiry } from 'src/app/model/enquiry';
import { EnquiryService } from 'src/app/service/enquiry.service';
import { ReserviceService } from 'src/app/service/reservice.service';


@Component({
  selector: 'app-check-enquiry',
  templateUrl: './check-enquiry.component.html',
  styleUrls: ['./check-enquiry.component.css']
})
export class CheckEnquiryComponent {

  constructor(private enquiryServices: EnquiryService, private formbuilder: FormBuilder,private reservice:ReserviceService) { }




  enquries: Array<Enquiry> = []
  emailform: FormGroup
  email: String
  firstname: String
  ngOnInit() {


    this.enquiryServices.getEnqiries().subscribe((data: any) => {
      this.enquries = data.body;
    })

     
    this.emailform = this.formbuilder.group({
      to:[],
      subject:[],
      textBodyMsg:[]
    })

  }

  forwrdToOe(id: number, enquiry: Enquiry) {

    this.enquiryServices.oeForward(id, enquiry).subscribe((data: any) => { console.log(data) })
  }

 

  sendEmail() {
    this.emailform.patchValue({
      to:this.email
    })
     
this.reservice.emailsend(this.emailform).subscribe((data:any)=>{

  console.log(data)
})

  }




  forMailData(enqury: any) {
    this.email = enqury.email
    this.firstname = enqury.firstname
   


  }

}
