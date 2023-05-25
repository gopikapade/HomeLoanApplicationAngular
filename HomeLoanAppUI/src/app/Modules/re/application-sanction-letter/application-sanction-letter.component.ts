import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CmService } from 'src/app/service/cm.service';
import { ReserviceService } from 'src/app/service/reservice.service';

@Component({
   selector: 'app-application-sanction-letter',
   templateUrl: './application-sanction-letter.component.html',
   styleUrls: ['./application-sanction-letter.component.css']
})
export class ApplicationSanctionLetterComponent {

   constructor(private cmservice: CmService, private formbuilder: FormBuilder, private reService: ReserviceService) { }

   sanctionLetters: any[];
   emailform: FormGroup;
   email: string;
   sanctionPdf: File;


   ngOnInit() {

      this.cmservice.getAllsanctionLetters().subscribe((data: any) => {
         this.sanctionLetters = data.body
         console.log(this.sanctionLetters)
      });
      this.emailform = this.formbuilder.group({
         to: [],
         subject: [],
         textBodyMsg: []
      })

   }

   mailBody(sanction: any) {
      this.email = sanction.enq.email
      console.log(sanction)
      console.log(this.emailform.value);
   }

   mailSanctionLetter(base64Data: string) {


       this.emailform.patchValue({
         to:this.email
       })
       console.log(this.emailform.value)

      const byteCharacters = atob(base64Data);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
         byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const file = new Blob([byteArray], { type: 'application/pdf' });
      const fileName = 'example.pdf'; // Specify the desired file name
      // Convert Blob to File
      this.sanctionPdf = new File([file], fileName, { type: file.type });

      const sanctionLetterMail = new FormData();

      sanctionLetterMail.append('data', JSON.stringify(this.emailform.value))
      sanctionLetterMail.append('file', this.sanctionPdf);

      this.reService.sanctionLettersende(sanctionLetterMail).subscribe((data: any) => {
         console.log(data);
         alert(data.responseMessage);
      }, (error:any)=>{
          alert(error.error.massage)
      })
   }


   sanctionLetter(event) {
      // this.sanctionPdf = event.target.files[0];
   }

   openPDFPreview(base64Data: string) {
      const byteCharacters = atob(base64Data);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
         byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const file = new Blob([byteArray], { type: 'application/pdf' });
      const fileName = 'example.pdf'; // Specify the desired file name
      // Convert Blob to File
      this.sanctionPdf = new File([file], fileName, { type: file.type });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
   }
}
