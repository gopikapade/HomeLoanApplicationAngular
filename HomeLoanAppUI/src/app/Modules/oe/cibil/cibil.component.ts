import { Component } from '@angular/core';
import { CibilService } from 'src/app/service/cibil.service';
import { EnquiryService } from 'src/app/service/enquiry.service';

@Component({
  selector: 'app-cibil',
  templateUrl: './cibil.component.html',
  styleUrls: ['./cibil.component.css']
})
export class CibilComponent {
  remarkModal: any;

  constructor(private enquiryService:EnquiryService, private cibil:CibilService){}

  page: number = 1;
  count: number = 0;
  tableSize: number = 3;

  enquiries:any
  cibilScore:any
  enquiry:any
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

    remark: string;
    id:number
    openRemarkPopup() {
      this.remark = ''; // Clear previous remark
      this.remarkModal.show();
    }


    passEnquiry(enquiry:any){
      this.enquiry=enquiry
    }

    submitRemark() {
      this.enquiry.cibilEnquiry.remark =this.remark
       console.log("id", this.id)
       console.log(this.enquiry)

      this.cibil.addRemark(this.enquiry).subscribe((data:any)=>{
         console.log(data)
      })
      console.log(this.remark);
      window.location.reload()
    }


    onTableDataChange(event: any) {
      this.page = event;
      this.enquiryService.oeGetEnquiries().subscribe((data:any)=>{
        this.enquiries=data.body;
       })
    }
    onTableSizeChange(event: any): void {
      this.tableSize = event.target.value;
      this.page = 1;
      this.enquiryService.oeGetEnquiries().subscribe((data:any)=>{
        this.enquiries=data.body;
        })
    }
  }