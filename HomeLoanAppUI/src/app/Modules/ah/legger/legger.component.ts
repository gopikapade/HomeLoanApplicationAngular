<<<<<<< HEAD
import { Component } from '@angular/core';
import { AhService } from 'src/app/service/ah.service';
=======
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AhService } from 'src/app/service/ah.service';

>>>>>>> parent of f113065 (Revert "Gopi Front End Update 00.11")

@Component({
  selector: 'app-legger',
  templateUrl: './legger.component.html',
  styleUrls: ['./legger.component.css']
})
export class LeggerComponent implements OnInit {
  
  constructor(private ahservice:AhService, private fb:FormBuilder){}
  
  customers: any;
 
  ngOnInit(): void {

    this.ahservice.getAllLoanAcounts().subscribe((data:any)=>{
      this.customers =data.body
      console.log(this.customers)
    })
 
  }

  constructor(private ahservice:AhService){}
  customers:any[]
  leagers:any[]=[]
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
