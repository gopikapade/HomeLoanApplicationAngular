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
POSTS: any;

  constructor(private enquiryServices: EnquiryService, private formbuilder: FormBuilder, private reservice: ReserviceService) { }


  page: number = 1;
  count: number = 0;
  tableSize: number = 7;

  enquries: Array<Enquiry> = []

  email: String
  firstname: String
  ngOnInit() {


    this.enquiryServices.getEnqiries().subscribe((data: any) => {
      const array = data.body;
      array.forEach(element => {
          if(element.oeForward!=true) {
             this.enquries.push(element)
          }
      });

    })
  }

  forwrdToOe(id: number, enquiry: Enquiry) {

    this.enquiryServices.oeForward(id, enquiry).subscribe((data: any) => { console.log(data) })
    window.location.reload();
  }


  forMailData(enqury: any) {
    this.email = enqury.email
    this.firstname = enqury.firstname
  }


  onTableDataChange(event: any) {
    this.page = event;
    this.enquiryServices.getEnqiries().subscribe((data: any) => {
      this.enquries = data.body;
    })
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.enquiryServices.getEnqiries().subscribe((data: any) => {
      this.enquries = data.body;
    })

  }

}
