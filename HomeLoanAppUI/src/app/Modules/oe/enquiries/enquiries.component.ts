import { Component } from '@angular/core';
import { EnquiryService } from 'src/app/service/enquiry.service';

@Component({
  selector: 'app-enquiries',
  templateUrl: './enquiries.component.html',
  styleUrls: ['./enquiries.component.css']
})
export class EnquiriesComponent {

    constructor(private enquiryService:EnquiryService)
    {}

    enquiries:any

    ngOnInit()
    {
     this.enquiryService.oeGetEnquiries().subscribe((data:any)=>{
           this.enquiries=data.body;
     })
    }



}
