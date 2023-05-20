import { Component } from '@angular/core';
import { Enquiry } from 'src/app/model/enquiry';
import { CibilService } from 'src/app/service/cibil.service';
import { EnquiryService } from 'src/app/service/enquiry.service';

@Component({
  selector: 'app-check-enquiry',
  templateUrl: './check-enquiry.component.html',
  styleUrls: ['./check-enquiry.component.css']
})
export class CheckEnquiryComponent {

  constructor(private enquiryServices:EnquiryService, private cibil:CibilService){}

  enquries:Array<Enquiry>=[]

  ngOnInit(){

       this.enquiryServices.getEnqiries().subscribe((data:any)=>{
              this.enquries=data.body;
       })
     }

    forwrdToOe(id:number, enquiry:Enquiry){
        this.enquiryServices.oeForward(id, enquiry).subscribe((data:any)=>{console.log(data)})
        window.location.reload();
     }

}
