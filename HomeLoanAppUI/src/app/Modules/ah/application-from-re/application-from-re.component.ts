import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AhService } from 'src/app/service/ah.service';

@Component({
  selector: 'app-application-from-re',
  templateUrl: './application-from-re.component.html',
  styleUrls: ['./application-from-re.component.css']
})
export class ApplicationFromReComponent
{


  constructor(private ahService:AhService, private route:Router){}

  sanctionLoan:any[]=[];
  ngOnInit(){

    this.ahService.getAllSanctionsLoan().subscribe((data:any)=>{
         this.sanctionLoan=data.body;
         console.log(this.sanctionLoan)
    })

  }

  createAccount(loan)
  {
     console.log(loan);
     const url = this.route.url;
     this.route.navigate([url,'createaccount'], {state:{data:loan}})
  }

}
