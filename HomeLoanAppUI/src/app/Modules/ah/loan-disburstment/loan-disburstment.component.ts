import { Component } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { AhService } from 'src/app/service/ah.service';

@Component({
  selector: 'app-loan-disburstment',
  templateUrl: './loan-disburstment.component.html',
  styleUrls: ['./loan-disburstment.component.css']
})
export class LoanDisburstmentComponent {

    constructor(private ahservice:AhService, private fb:FormBuilder){}

    customers:Array<any>=[]
    cust:any;
    loandisbursement:FormGroup;
    ngOnInit()
    {
      this.ahservice.getAllLoanAcounts().subscribe((data:any)=>{
        this.customers =data.body
        console.log(data)
      })
      console.log(this.customers);
      this.loandisbursement= this.fb.group({
        loanNo: [''],
        agreementDate: [''],
        amountPayType: [''],
        bankName: [''],
        ifsc: [''],
        accountType: [''],
        paymentStatus: [''],
        amountPaidDate: [''],
        totalAmount: [''],
        transferAmount: [''],
        accountNumber: ['']
      })

    }


    disburstment()
    {
      this.ahservice.proceedeDisbustment(this.cust.loandisbursement.loanDisbursementid,
         this.loandisbursement.value).subscribe((data:any)=>{
         console.log(data)
         alert("Payment Disburemnt Processs Complete")
         window.location.reload()
      }, (error:any)=>{
         alert("Process Payment Have a probleam")
      })
    }

    passCustomer(customer)
    {
      console.log(customer)
        this.loandisbursement.patchValue({
          loanNo: customer.currentloandetails.currentloanNo,
          bankName: customer.accountdetails.bankanme,
          ifsc:  customer.accountdetails.ifsc,
          accountType:  customer.accountdetails.accountType,
          totalAmount: customer.customerTotalLoanRequired,
          transferAmount:customer.customerTotalLoanRequired -  (customer.customerTotalLoanRequired*3/100) ,
          accountNumber: customer.accountdetails.accountNumber
        })
      this.cust = customer;
    }


}
