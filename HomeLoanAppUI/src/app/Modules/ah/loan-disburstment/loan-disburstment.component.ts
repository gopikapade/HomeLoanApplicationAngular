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
      this.ahservice.getAllSanctionsLoan().subscribe((data:any)=>{
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
      })
    }

    passCustomer(customer)
    {
      console.log(customer)
        this.loandisbursement.patchValue({
          loanNo: customer.currentloandetails.currentloanNo,
          agreementDate: [''],
          amountPayType: [''],
          bankName: [''],
          ifsc: [''],
          accountType:  customer.accountdetails.accountType,
          paymentStatus: [''],
          amountPaidDate: [''],
          totalAmount: customer.customerTotalLoanRequired,
          transferAmount:customer.customerTotalLoanRequired,
          accountNumber: customer.accountdetails.accountNumber
        })
      this.cust = customer;
    }


}
