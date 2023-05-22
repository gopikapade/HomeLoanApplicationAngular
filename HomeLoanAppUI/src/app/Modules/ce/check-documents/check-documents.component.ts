import { Component } from '@angular/core';
import { CeserviceService } from 'src/app/service/ceservice.service';

@Component({
  selector: 'app-check-documents',
  templateUrl: './check-documents.component.html',
  styleUrls: ['./check-documents.component.css']
})
export class CheckDocumentsComponent {

  constructor(private ces:CeserviceService)
  {

  }

  documents:any[]=[];
  ngOnInit()
  {
    this.ces.getData().subscribe((data:any)=>{
      this.documents=data.body
      console.log(this.documents)
   })
  }

  public showModal = false;
public selectedDoc: any;

public openModal(doc: any) {
  this.selectedDoc = doc;
  this.showModal = true;
}

public closeModal() {
  this.showModal = false;
}


updateDocumentStatus(){
this.ces.updateDocumentstatus(this.selectedDoc).subscribe((data:any)=>{
   console.log(data);
   alert(data.responseMessage);
}, (error:any)=>{
  alert(error.error.massage);
});

window.location.reload
  }

}
