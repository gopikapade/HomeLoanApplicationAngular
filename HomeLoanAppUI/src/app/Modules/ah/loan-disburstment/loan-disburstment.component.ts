import { Component } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormGroup } from '@angular/forms';
import { AhService } from 'src/app/service/ah.service';
=======
>>>>>>> parent of 27c2a7b (Merge branch 'main' of https://github.com/lurnfx/HomeLoanApplicationAngular)

@Component({
  selector: 'app-loan-disburstment',
  templateUrl: './loan-disburstment.component.html',
  styleUrls: ['./loan-disburstment.component.css']
})
export class LoanDisburstmentComponent {

<<<<<<< HEAD
    constructor(private ahservice:AhService, private fb:FormBuilder){}

    customers:Array<any>=[]
    cust:any;
    loandisbursement:FormGroup;
    ngOnInit()
    {
      this.ahservice.  getAllLoanAcounts().subscribe((data:any)=>{
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

=======
>>>>>>> parent of 27c2a7b (Merge branch 'main' of https://github.com/lurnfx/HomeLoanApplicationAngular)
}
