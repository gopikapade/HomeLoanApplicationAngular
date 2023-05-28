
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { AhService } from 'src/app/service/ah.service';
import { AfterViewInit, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-legger',
  templateUrl: './legger.component.html',
  styleUrls: ['./legger.component.css']
})


export class LeggerComponent{

  constructor(private ahservice:AhService, private fb:FormBuilder){}

  customers:any[]
  leagers:any[]=[]
  CurrentLoanDetails:FormGroup;
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
   this.CurrentLoanDetails = this.fb.group({
       currentloanId:[],
       currentloanNo:[],
       tenure:[],
       defualter:[],
       totalAmounttobepaid:[],
       rateOfInterest:[],
       totalInterest:[],
       sanctionDate:[],
       remark:[],
       status:[],
       emiDetails:this.fb.array([

       ])
    })


  }




  // @ViewChild('nextEmiDueDate') nextEmiDueDateInput!: ElementRef;

  // ngAfterViewInit() {
  //   // Access the value after the view has been initialized
  //   const inputValue = this.nextEmiDueDateInput.nativeElement.value;
  //   console.log(inputValue);
  // }


     get emiDetails() :FormArray
     {
           return   this.CurrentLoanDetails.get('emiDetails') as FormArray
     }

    //  patchValues()
    //  {
    //     const emi = this.fb.group({
    //       private String
    //       nextEmiDueDate,
    //       previousEmiStatus;
    //       private Double emiAmountMonthly;
    //     })
    //  }

    customer:any;

  payEmi(c)
  {
    console.log("ind pay")
     this.customer = c
    // this.CurrentLoanDetails.setControl('emiDetails', this.fb.array(c.currentloandetails.emiDetails));
    this.emiDetails.clear();
     c.currentloandetails.emiDetails.forEach(element=>{
      let emi= this.fb.group({
        emiID: [''],
        nextEmiDueDate: [''],
        previousEmiStatus: [''],
        emiAmountMonthly: ['']
      })
       emi.patchValue({
           emiID:element.emiID,
           emiAmountMonthly:element.emiAmountMonthly,
           nextEmiDueDate:element.nextEmiDueDate,
           previousEmiStatus:element.previousEmiStatus
       })
       this.emiDetails.push(emi);
     })
     console.log(c.currentloandetails.emiDetails)
     console.log(this.CurrentLoanDetails.value)
  }

  pay()
  {
    this.emiDetails.clear()

    let emi= this.fb.group({
      nextEmiDueDate: [''],
    })
    this.emiDetails.push(emi);
   this.CurrentLoanDetails.patchValue({
    currentloanId:this.customer.currentloandetails.currentloanId,
    currentloanNo:this.customer.currentloandetails.currentloanNo,
    tenure:this.customer.currentloandetails.currentloanId,
    defualter:this.customer.currentloandetails.defualter,
    totalAmounttobepaid:this.customer.currentloandetails.totalAmounttobepaid,
    rateOfInterest:this.customer.currentloandetails.rateOfInterest,
    totalInterest:this.customer.currentloandetails.totalInterest,
    sanctionDate:this.customer.currentloandetails.sanctionDate,
    remark:this.customer.currentloandetails.remark,
    status:this.customer.currentloandetails.status,

   })


    console.log(this.CurrentLoanDetails.value);
    console.log(this.customer.ledger.ledgerId)

    this.ahservice.payEmi(this.CurrentLoanDetails.value, this.customer.ledger.ledgerId).subscribe((data:any)=>{
        console.log(data);
      window.location.reload();
    });


  }

 emi:FormGroup;

  addPayment()
  {


  }
}
