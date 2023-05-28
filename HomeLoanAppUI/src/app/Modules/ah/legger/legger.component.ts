import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AhService } from 'src/app/service/ah.service';


@Component({
  selector: 'app-legger',
  templateUrl: './legger.component.html',
  styleUrls: ['./legger.component.css']
})
export class LeggerComponent implements OnInit {
  

  

  constructor(private ahservice:AhService){}
  customers:any[]
  leagers:any[]=[]

  emidetails:any[]
  currentloandetails:[]
 
  ngOnInit()
  {
    this.ahservice.getAllLoanAcounts().subscribe((data:any)=>{
      this.customers =data.body
      this.customers.forEach(element=>{
       if(element.loandisbursement.loanNo!=null){
         this.leagers.push(element)
       }
      })
      console.log(this.leagers)
    })
  }

}
