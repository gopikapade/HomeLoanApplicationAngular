import { Component } from '@angular/core';
import { CibilService } from 'src/app/service/cibil.service';
import { EnquiryService } from 'src/app/service/enquiry.service';

@Component({
  selector: 'app-cibil',
  templateUrl: './cibil.component.html',
  styleUrls: ['./cibil.component.css']
})
export class CibilComponent {

  constructor(private enquiryService:EnquiryService, private cibil:CibilService){}

  enquiries:any
  cibilScore:any
    ngOnInit()
    {
     this.enquiryService.oeGetEnquiries().subscribe((data:any)=>{
           this.enquiries=data.body;
     })
    }


    checkCibil(enquiry)
    {
      this.cibil.getCibilCheck(enquiry).subscribe((cibil:any)=>{
       this.cibilScore = cibil;
      })
      window.location.reload();
    }

    getScoreColor(score: number): string {
      if (score >= 300 && score < 500) {
        return 'red';
      } else if (score >= 500 && score < 650) {
        return 'orange';
      } else if (score >= 650 && score < 750) {
        return 'yellow';
      } else if (score >= 750 && score <= 900) {
        return 'green';
      } else {
        return '';
      }
    }
}
