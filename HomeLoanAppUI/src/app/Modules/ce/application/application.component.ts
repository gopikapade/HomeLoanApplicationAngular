import { Component } from '@angular/core';
import { CeserviceService } from 'src/app/service/ceservice.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {

  constructor(public ces:CeserviceService)
  {

  }

  documents:any[]=[];
  ngOnInit()
  {
      this.ces.getData().subscribe((data:any)=>{
      this.documents=data.body
      console.log(this.documents);
   })
  }



}
