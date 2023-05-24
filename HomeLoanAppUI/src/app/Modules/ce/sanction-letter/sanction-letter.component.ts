import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { elementAt } from 'rxjs';
import { CeserviceService } from 'src/app/service/ceservice.service';
import * as pdfjsLib from 'pdfjs-dist';


@Component({
   selector: 'app-sanction-letter',
   templateUrl: './sanction-letter.component.html',
   styleUrls: ['./sanction-letter.component.css']
})
export class SanctionLetterComponent {

   emi: any;

   constructor(public ces: CeserviceService, private fb: FormBuilder) { }



   documents: any[] = [];
   ngOnInit() {
      this.ces.getData().subscribe((data: any) => {
         const array = data.body

         array.forEach(element => {
            if (element.status2 == true) {
               this.documents.push(element)
            }
            console.log(this.documents)
         });

      })



   }

   calculateEmi(doc) {
      const Emi = this.fb.group({
         loanAmmount: doc.enq.loanAmmount,
         tenure: doc.enq.tenure,
         intrestrate: 7
      });

      console.log(Emi.value);


      this.ces.getEMI(Emi.value).subscribe((data: any) => {
         this.emi = data.body;
      })

   }

   getSanctionLettter(doc:any) {
      const sanctioLetter = this.fb.group({
         applicantName: doc.enq.applicantName,
         producthomeEquity: "new home",
         modeOfPayment: "online",
         remarks: "provide valuetion of 300000",
         termsCondition: "tearms and comdition",
         status: "Approved",
         rateOfInterest: 7,
         loanTenure: doc.enq.tenure,
         contactno: doc.enq.contactno,
         monthlyEmiAmount: 25000,
         loanammount: 3000000
      })
      this.ces.genrateSanctionLetter(sanctioLetter.value, doc).subscribe((data:any)=>{
          console.log(data);
      })

   }
}