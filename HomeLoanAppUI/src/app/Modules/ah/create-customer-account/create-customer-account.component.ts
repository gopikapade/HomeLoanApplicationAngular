import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AhserviceService } from 'src/app/service/ahservice.service';

@Component({
  selector: 'app-create-customer-account',
  templateUrl: './create-customer-account.component.html',
  styleUrls: ['./create-customer-account.component.css']
})
export class CreateCustomerAccountComponent {

 data:any;
  constructor(private formBuilder: FormBuilder, private service: AhserviceService, private route:Router) {

       this.loan =this.route.getCurrentNavigation()?.extras?.state?.['data']
//        localStorage.setItem('data', JSON.stringify(this.loan));

// // Retrieving the data from localStorage
//  const storedData = localStorage.getItem('data');
//  this.data = storedData ? JSON.parse(storedData) : null;
   }
  professionsalaryslips: File;
  mortgagePropertyInsurance: File;
  mortgagePropertyProof: File;
  customeraccount:any;
  buildingpermission: File;
  layout: File;
  buildingPlan: File;
  estimate: File;
  noc: File


  customerForm: FormGroup
  step: number = 1

  loan:any;

  previous() {
    this.step = this.step - 1;
    this.progressPercentage = (this.step / this.totalSteps) * 100;
  }
  next() {
    this.step = this.step + 1;
    this.progressPercentage = (this.step / this.totalSteps) * 100;
  }


  totalSteps: number = 9;
  progressPercentage: number;




  patchvalue(){
this.customerForm.controls['customerAddress'].get('permanantAddress').patchValue({
  areaname: [this.customerForm.controls['customerAddress'].value.areaname],
  cityname: [this.customerForm.controls['customerAddress'].value.cityname],
  district: [this.customerForm.controls['customerAddress'].value.district],
  state: [this.customerForm.controls['customerAddress'].value.state],
  pincode: [this.customerForm.controls['customerAddress'].value.pincode],


})
  }
  ngOnInit() {
    console.log(this.data)
    this.customerForm = this.formBuilder.group({
      customerName: [''],
      customerDateOfBirth: [''],
      customerGender: [''],
      customerEmail: ['', Validators.email],
      customerAge: [''],
      customerMobileNumber: [''],
      customerAdditionalMobileNumber: [''],
      customerAmountPaidForHome: [''],
      customerTotalLoanRequired: [''],
      educationalInfo: this.formBuilder.group({
        higherEducation: ['']
      }),
      familydependentInfo: this.formBuilder.group({
        fatherName: [''],
        motherName: [''],
        spouseName: [''],
        maritalStatus: [''],
        dependentMember: [''],
        familyIncome: [''],
        noOfFamilyMember: [''],
        noOfChild: ['']
      }),
   customerAddress: this.formBuilder.group({
        areaname: [''],
        cityname: [''],
        district: [''],
        state: [''],
        pincode: [''],
        permanantAddress: this.formBuilder.group({
          areaname: [''],
          cityname: [''],
          district: [''],
          state: [''],
          pincode: ['']
        })
      }),
      profession: this.formBuilder.group({
        professiontype: [''],
        professionsalaryType: [''],
        professionworkingperiod: [''],
        professionDesignation: [''],
        professionsalary: [''],

      }),
      mortgageDetails: this.formBuilder.group({
        mortgagePropertyValue: [''],
        mortgageLoanOnProperty: [''],
        mortgagePropertyType: [''],


      }),
      currentloandetails: this.formBuilder.group({
        currentloanNo: [''],
        tenure: [''],
        totalAmounttobepaid: [''],
        rateOfInterest: [''],
        totalInterest: [''],
        sanctionDate: [''],
        remark: [''],
        status: [''],
        emidetails: this.formBuilder.group({
          nextEmiDueDate: [''],
          previousEmiStatus: [''],
          emiAmountMonthly: ['']
        })
      }),

      previousloan: this.formBuilder.group({
        previousLoanAmount: [''],
        previousLoanpaidAmount: [''],
        previousLoanremainingAmount: [''],
        previousLoanTenure: [''],
        previousLoandeafulterCount: [''],
        previousLoanStatus: [''],
        previousLoanRemark: ['']

      }),
      accountdetails: this.formBuilder.group({

        accountType: [''],
        accountHolderName: [''],
        accountStatus: [''],
        accountBalance: [''],
        accountNumber: [''],

        ifsc:[''],
        bankname:['']
      }),
      propertyinfo: this.formBuilder.group({
        propertyType: [''],
        propertyArea: [''],
        constructionArea: [''],
        propertyPrice: [''],
        constructionPrice: [''],

        propertydocuments: this.formBuilder.group({
        }),
        propertyAddress: this.formBuilder.group({
          areaname: [''],
          cityname: [''],
          district: [''],
          state: [''],
          pincode: ['']


        })

      }),
      gurantordetails: this.formBuilder.group({
        guarantorName: [''],
        guarantorDateOfBirth: [''],
        guarantorRelationshipwithCustomer: [''],
        guarantorMobileNumber: [''],
        guarantorAdharCardNo: ['']

      }),
      loandisbursement: this.formBuilder.group({
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


      }),
      ledger: this.formBuilder.group({
        ledgerCreatedDate: [''],
        amountPaidtillDate: [''],
        nextEmiDatestart: [''],
        nextEmiDateEnd: [''],
        previousEmitStatus: [''],
        currentMonthEmiStatus: [''],
        loanEndDate: [''],
        loanStatus: [''],
        totalLoanAmount: [''],
        payableAmountwithInterest: [''],
        monthlyEMI: [''],
        remainingAmount: [''],
        tenure: [''],
        defaulterCount: [''],


      }),

      sanctionletter: this.formBuilder.group({

        sanctionDate: [''],
        applicantName: [''],
        producthomeEquity: [''],
        modeOfPayment: [''],
        remarks: [''],
        termsCondition: [''],
        status: [''],
        rateOfInterest: [''],
        loanTenure: [''],
        contactno: [''],
        monthlyEmiAmount: [''],


      })





    });

    if(this.loan!=null){
          this.customerForm.patchValue({
            customerName:this.loan.enq.firstName+" "+this.loan.enq.lastName,
            customerEmail:this.loan.enq.email,
            customerAge:this.loan.enq.age,
            customerMobileNumber:this.loan.enq.mobileNo,
            customerTotalLoanRequired:this.loan.enq.loanAmmount,

            educationalInfo: this.formBuilder.group({
              higherEducation: this.loan.enq.education.higherEducation
            }),
          })



    }

  }

  pdatePermanentAddress(){


  }
  onSubmit() {
    alert("in ts")


    const customeraccount = JSON.stringify(this.customerForm.value);
    const data = new FormData();
    data.append('customeraccount', customeraccount);
    // data.append('professionsalaryslips', this.professionsalaryslips);
    // data.append('mortgagePropertyProof', this.mortgagePropertyProof);
    // data.append('mortgagePropertyInsurance', this.mortgagePropertyInsurance);
    // data.append('buildingpermission', this.buildingpermission);
    // data.append('layout', this.layout);
    // data.append('buildingPlan', this.buildingPlan);
    // data.append('estimate', this.estimate);
    // data.append('noc', this.noc);


    if (this.professionsalaryslips) {
      data.append('professionsalaryslips', this.professionsalaryslips);
      }
      if (this.mortgagePropertyProof) {
      data.append('mortgagePropertyProof', this.mortgagePropertyProof);
      }
      if (this.mortgagePropertyInsurance) {
      data.append('mortgagePropertyInsurance', this.mortgagePropertyInsurance);
      }
      if (this.buildingpermission) {
      data.append('buildingpermission', this.buildingpermission);
      }
      if (this.layout) {
      data.append('layout', this.layout);
      }
      if (this.buildingPlan) {
      data.append('buildingPlan', this.buildingPlan);
      }
      if (this.estimate) {
      data.append('estimate', this.estimate);
      }
      if (this.noc) {
      data.append('noc', this.noc);
      }

   this. customeraccount=customeraccount
    console.log(customeraccount)


    this.service.createCustomerAccount(data).subscribe(()=>{


      alert("account Created Sucessfully")

      window.location.reload();

    });






  }

  onProfessionSalarySlips(event){
    this.professionsalaryslips = event.target.files[0]

  }


  onPropertyProofChange(event) {
    this.mortgagePropertyProof = event.target.files[0];

  }
  onPropertyInsuranceChange(event) {
    this.mortgagePropertyInsurance = event.target.files[0];

  }

  handleFileChangeBuildingPermission(event: any) {
    this.buildingpermission = event.target.files[0];

  }

  handleFileChangeLayout(event: any) {
    this.layout = event.target.files[0];

  }

  handleFileChangeBuildingPlan(event: any) {
    this.buildingPlan = event.target.files[0];

  }

  handleFileChangeEstimate(event: any) {
    this.estimate = event.target.files[0];

  }

  handleFileChangeNOC(event: any) {
    this.noc = event.target.files[0];

  }

}
