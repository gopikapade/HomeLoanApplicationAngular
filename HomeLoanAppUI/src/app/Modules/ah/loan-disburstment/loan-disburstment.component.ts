import { Component } from '@angular/core';
import { AhService } from 'src/app/service/ah.service';

@Component({
  selector: 'app-loan-disburstment',
  templateUrl: './loan-disburstment.component.html',
  styleUrls: ['./loan-disburstment.component.css']
})
export class LoanDisburstmentComponent {

    constructor(private ahservice:AhService){}

    customers:Array<any>=[]
    ngOnInit()
    {
      this.ahservice.  getAllLoanAcounts().subscribe((data:any)=>{
        this.customers =data.body
        console.log(data)
      })
      console.log(this.customers);
    }

}
