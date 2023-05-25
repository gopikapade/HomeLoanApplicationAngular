import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AhserviceService } from 'src/app/service/ahservice.service';

@Component({
  selector: 'app-create-customer-account',
  templateUrl: './create-customer-account.component.html',
  styleUrls: ['./create-customer-account.component.css']
})
export class CreateCustomerAccountComponent {
  constructor(private formBuilder: FormBuilder, private service: AhserviceService) { }
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

  previous() {
    this.step = this.step - 1;
    this.progressPercentage = (this.step / this.totalSteps) * 100;
  }
  next() {
    this.step = this.step + 1;
    this.progressPercentage = (this.step / this.totalSteps) * 100;
  }


  totalSteps: number = 14;
  progressPercentage: number;



  ngOnInit() {
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
        accountNumber: ['']
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
  }
  onSubmit() {
    alert("in ts")


    const customeraccount = JSON.stringify(this.customerForm.value);
    const data = new FormData();
    data.append('customeraccount', customeraccount);
    data.append('professionsalaryslips', this.professionsalaryslips);
    data.append('mortgagePropertyProof', this.mortgagePropertyProof);
    data.append('mortgagePropertyInsurance', this.mortgagePropertyInsurance);
    data.append('buildingpermission', this.buildingpermission);
    data.append('layout', this.layout);
    data.append('buildingPlan', this.buildingPlan);
    data.append('estimate', this.estimate);
    data.append('noc', this.noc);

   this. customeraccount=customeraccount
    console.log(customeraccount)


    this.service.createCustomerAccount(data).subscribe()








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