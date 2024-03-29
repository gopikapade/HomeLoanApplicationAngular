import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { elementAt } from 'rxjs';
import { CeserviceService } from 'src/app/service/ceservice.service';
import * as pdfjsLib from 'pdfjs-dist';
import { EMI } from 'src/app/model/enquiry';


@Component({
   selector: 'app-sanction-letter',
   templateUrl: './sanction-letter.component.html',
   styleUrls: ['./sanction-letter.component.css']
})
export class SanctionLetterComponent {


   emi:EMI=new EMI();

   constructor(public ces: CeserviceService, private fb: FormBuilder) { }



   documents: any[] = [];
   ngOnInit() {
      this.ces.getData().subscribe((data: any) => {
         const array = data.body

         array.forEach(element => {
            if (element.status1 == true) {
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
      console.log(doc)

      this.ces.getEMI(Emi.value).subscribe((data: any) => {
         this.emi = data.body;
         console.log(this.emi);


         if(this.emi ==null){
             console.log("IN EMI IF ")
         this.ces.updateemidata(doc.creditManeger.id,this.emi).subscribe((data:any)=>{
            this.emi=data.body
   
            console.log(data)
          })
   
            
          }
      })
      console.log(this.emi)


   }

   getSanctionLettter(doc:any) {
      const sanctioLetter = this.fb.group({
         sanctionDate:[],
         applicantName: doc.enq.firstName + " "+ doc.enq.lastName,
         producthomeEquity: "new home",
         modeOfPayment: "online",
         remarks: "provide valuetion of 300000",
         termsCondition: "tearms and comdition",
         status: "Approved",
         rateOfInterest: doc.enq.tenure,
         loanTenure: doc.enq.tenure,
         contactno: doc.enq.contactno,
         monthlyEmiAmount: this.emi.monthlyEmi,
         loanammount: doc.enq.loanAmmount
      })


      console.log(sanctioLetter.value)
      this.ces.genrateSanctionLetter(sanctioLetter.value, doc).subscribe((data:any)=>{
          console.log(data);
          window.location.reload();
      })

   }
   openPDFPreview(base64Data: string) {

      const byteCharacters = atob(base64Data);

      const byteNumbers = new Array(byteCharacters.length);

      for (let i = 0; i < byteCharacters.length; i++) {

        byteNumbers[i] = byteCharacters.charCodeAt(i);

      }

      const byteArray = new Uint8Array(byteNumbers);

      const file = new Blob([byteArray], { type: 'application/pdf' });

      const fileURL = URL.createObjectURL(file);

      window.open(fileURL);


   }
}
