import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Enquiry } from 'src/app/model/enquiry';
import { EnquiryService } from 'src/app/service/enquiry.service';
import { ReserviceService } from 'src/app/service/reservice.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {
  constructor(private enquiryServices: EnquiryService,
    private formbuilder: FormBuilder, private reservice: ReserviceService,
    private router:Router) {


     }


  page: number = 1;
  count: number = 0;
  tableSize: number = 5;

  enquries: Array<Enquiry> = []
  emailform: FormGroup
  email: String
  firstname: String
  ngOnInit() {
    this.enquiryServices.getEnqiries().subscribe((data: any) => {
      const allEnquries = data.body;
      allEnquries.forEach(element => {
        if (element.cibilEnquiry != null && element.loanApplication!=true) {
          this.enquries.push(element);
        }
      });
    });


    this.emailform = this.formbuilder.group({
      to: [],
      subject: [],
      textBodyMsg: []
    })

  }

  forwrdToOe(id: number, enquiry: Enquiry) {

    this.enquiryServices.oeForward(id, enquiry).subscribe((data: any) => { console.log(data) })
  }



  sendEmail() {
    this.emailform.patchValue({
      to: this.email
    })
    this.reservice.emailsend(this.emailform).subscribe((data: any) => {
      console.log(data)
    })

  }




  forMailData(enqury: any) {
    this.email = enqury.email
    this.firstname = enqury.firstname
  }


  onTableDataChange(event: any) {
    this.page = event;
    this.enquiryServices.getEnqiries().subscribe((data: any) => {
     this.enquries = data.body;
      // allEnquries.forEach(element => {
      //   if (element.cibilEnquiry != null && element.loanapplication!=true) {
      //     this.enquries.push(element);
      //   }
      // });
    })
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.enquiryServices.getEnqiries().subscribe((data: any) => {
      this.enquries = data.body;

      // allEnquries.forEach(element => {
      //   if (element.cibilEnquiry != null) {
      //     this.enquries.push(element);
      //   }
      // });
    })

  }


  application(enqury)
  {
    // const enquirys =JSON.stringify(enqury)
    const url = this.router.url
    this.router.navigate([url, 'loan'],   {state:{data:enqury}})
    //  const data  = sessionStorage.getItem('menuesData')
    //  sessionStorage.setItem("menuesData", JSON.stringify(data));
  }

   //this.router.navigate(['/view'], { replaceUrl: true });


   deleteEnq(id:number){
    this.enquiryServices.deleteEnquiry(id).subscribe((data:any)=>{
       console.log(data.responseMessage)
    }, (error:any)=>{alert(error.error.massage)})
     window.location.reload();
   }


  }


