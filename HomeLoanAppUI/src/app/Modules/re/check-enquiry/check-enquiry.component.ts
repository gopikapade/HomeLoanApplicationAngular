import { Component } from '@angular/core';
import { Enquiry } from 'src/app/model/enquiry';
import { EnquiryService } from 'src/app/service/enquiry.service';

@Component({
  selector: 'app-check-enquiry',
  templateUrl: './check-enquiry.component.html',
  styleUrls: ['./check-enquiry.component.css']
})
export class CheckEnquiryComponent {

  constructor(private enquiryServices:EnquiryService){}

  enquries:Array<Enquiry>=[]

  ngOnInit(){

       this.enquiryServices.getEnqiries().subscribe((data:any)=>{
              this.enquries=data.body;
       })
     }

    forwrdToOe(id:number, enquiry:Enquiry){

        this.enquiryServices.oeForward(id, enquiry).subscribe((data:any)=>{console.log(data)})
     }

}
