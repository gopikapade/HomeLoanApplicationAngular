import { Component } from '@angular/core';
import { elementAt } from 'rxjs';
import { CeserviceService } from 'src/app/service/ceservice.service';

@Component({
  selector: 'app-sanction-letter',
  templateUrl: './sanction-letter.component.html',
  styleUrls: ['./sanction-letter.component.css']
})
export class SanctionLetterComponent {


  constructor(public ces:CeserviceService)
  {}

  documents:any[]=[];
  ngOnInit()
  {
      this.ces.getData().subscribe((data:any)=>{
      const array=data.body

      array.forEach(element => {
          if(element.status2==true){
             this.documents.push(element)
          }
      });

   })
}

}
