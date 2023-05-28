import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  areaname: this.customerForm.get('customerAddress').value.areaname,
  cityname: this.customerForm.get('customerAddress').value.cityname,
  district: this.customerForm.get('customerAddress').value.district,
  state: this.customerForm.get('customerAddress').value.state,
  pincode: this.customerForm.get('customerAddress').value.pincode,
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
        // emidetails: this.formBuilder.Group({
        //   // nextEmiDueDate: [''],
        //   // previousEmiStatus: [''],
        //   // emiAmountMonthly: ['']
        // })
        emiDetails:this.formBuilder.array([])
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
            customerTotalLoanRequired:this.loan.enq.loanAmmount
          })

          this.customerForm.get('educationalInfo').patchValue({
            higherEducation:this.loan.enq.education.higherEducation
          })
          this.customerForm.get('profession').patchValue({
            professionsalary:this.loan.enq.education.income
          })



          this.customerForm.get('currentloandetails').patchValue({
            currentloanNo: this.getRandomSixDigitNumber(),
            tenure: this.loan.enq.tenure,
            totalAmounttobepaid: this.calculateTotalLoanAmount(this.loan.enq.loanAmmount, this.loan.enq.tenure, 7),
            rateOfInterest:7,
            totalInterest:  this.calculateInterest(this.loan.enq.loanAmmount, this.loan.enq.tenure, 7),
            sanctionDate: [''],
            remark: [''],
            status: [''],
            emidetails: this.formBuilder.group({
              nextEmiDueDate: [''],
              previousEmiStatus: [''],
              emiAmountMonthly: ['']
            })
          })

          this.professionsalaryslips= this.base64ToFile(this.loan.personalDocuments.incomeTax, 'salarySlip')
          this.mortgagePropertyProof =this.base64ToFile(this.loan.personalDocuments.incomeTax, 'salarySlip')

          this.buildingpermission = this.base64ToFile(this.loan.personalDocuments.incomeTax, 'salarySlip')
          this.layout = this.base64ToFile(this.loan.personalDocuments.incomeTax, 'salarySlip');
          this.buildingPlan  = this.base64ToFile(this.loan.personalDocuments.incomeTax, 'salarySlip');
          this.estimate= this.base64ToFile(this.loan.personalDocuments.incomeTax, 'salarySlip');
          this.noc= this.base64ToFile(this.loan.personalDocuments.incomeTax, 'salarySlip')

        }

        const emiGroup= this.formBuilder.group({
          nextEmiDueDate: [''],
          previousEmiStatus: [''],
          emiAmountMonthly: ['']
        })
     this.emiDetails.push(emiGroup);


    console.log(this.emiDetails);
  }



  get emiDetails() {
    return this.customerForm.controls['currentloandetails'].get('emiDetails') as FormArray;
  }

  getRandomSixDigitNumber(): number {
    const min = 100000;
    const max = 999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

    console.log(this.customerForm)
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
      console.log((data))
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
  base64ToFile(base64Code: string, fileName: string): File {
    const byteCharacters = atob(base64Code);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const file = new File([byteArray], fileName);
    return file;
  }

  calculateEMI(amount: number, tenure: number, rate: number): number {
    rate = 7 / 12 / 100;
    tenure = tenure * 12;
    // const monthlyRate = rate / 100 / 12;
    const emi = (amount * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);
    return Math.floor(emi);
  }


  calculateTotalLoanAmount(amount: number, tenure: number, rate: number): number {
    const emi = this.calculateEMI(amount, tenure, rate);
    const total = emi * tenure * 12;
    return Math.floor(total);
  }

  calculateInterest(amount: number, tenure: number, rate: number): number {
    const total = this.calculateTotalLoanAmount(amount, tenure, rate);
    const interest = total - amount;
    return Math.floor(interest);
  }
}

