import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Enquiry } from 'src/app/model/enquiry';
import { EnquiryService } from 'src/app/service/enquiry.service';
import { ReserviceService } from 'src/app/service/reservice.service';
@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.css']
})
export class LoanApplicationComponent {
  addressProof:File;
  filteredNames: string[];
  constructor(private formBuilder: FormBuilder,private reservice:ReserviceService,
    private enquries:EnquiryService, private router:Router) {

  }
  pancard:File;
  incomeTax:File;
  aadharCard:File;
  photo:File;
  salarySlip:File;
  buildingpermission:File;
  layout:File;
  buildingPlan:File;
  estimate:File;
  noc:File;
  reader=new FileReader();
  showPass=null;
  enquiries:Array<Enquiry>;
  search:string

  currentStep: number = 1;
  progressPercentage: number = 40;
  loanapplicationform: FormGroup;


  data:any = this.router.getCurrentNavigation()?.extras?.state?.['data']


  ngOnInit() {
    this.loanapplicationform=this.formBuilder.group({
      remark:[''],
      status1:[''],
      status2:[''],
    enq : this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNo: ['', Validators.required],
      pancardNo: ['', Validators.required],
      marrtialStatus: ['', Validators.required],
      income: ['', Validators.required],
      loanAmmount: ['', Validators.required],
        education:this.formBuilder.group({
          higherEducation:[]
     })
    })
  })

  this.enquries.getEnqiries().subscribe((data: any) => {
    this.enquiries = data.body;
  });

  if(this.data!=null){
    this.loanapplicationform.get('enq').patchValue({
      firstName: this.data.firstName,
      lastName: this.data.lastName,
      age:  this.data.age,
      email:  this.data.email,
      mobileNo:  this.data.mobileNo,
      pancardNo: this.data.pancardNo,
      marrtialStatus: this.data.marrtialStatus,
      income: this.data.income,
      loanAmmount: this.data.loanAmmount
     })

     this.loanapplicationform.controls['enq'].get('education').patchValue({
      higherEducation:this.data.education.higherEducation
     })
  }

  }



  filterNames() {
    if (!this.search) {
      this.filteredNames = this.enquiries.map(enquiry => enquiry.firstName);
    } else {
      const query = this.search.toLowerCase();
      this.filteredNames = this.enquiries
        .filter(enquiry => enquiry.firstName.toLowerCase().includes(query))
        .map(enquiry => enquiry.firstName);
    }
  }




  next() {
    this.currentStep = this.currentStep+1;
    this.progressPercentage = this.progressPercentage+30;
  }
  previous() {
    this.currentStep = this.currentStep-1;
    this.progressPercentage = this.progressPercentage-30;
  }
  submitForm() {
    if (this.loanapplicationform.valid) {

      const loanapplication=JSON.stringify(this.loanapplicationform.value);
      const data=new FormData();
      data.append('re',loanapplication);
      data.append('addressProof',this.addressProof);
      data.append('pancard',this.pancard);
      data.append('incomeTax',this.incomeTax);
      data.append('aadharCard',this.aadharCard);
      data.append('photo',this.photo);
      data.append('salarySlip',this.salarySlip);
      data.append('buildingpermission',this.buildingPlan);
      data.append('layout',this.layout);
      data.append('buildingPlan',this.buildingPlan);
      data.append('estimate',this.estimate);
      data.append('noc',this.noc)

      this.reservice.saveLoanApplication(data).subscribe((data: any) =>{
            alert("Apllication Saved Sucessfully")
            this.loanapplicationform.reset();
      },(responce:any)=>{alert(responce.error.massage)});





    } else {
      // Handle invalid form

    }
  }


  onAddressProof(event){
   this.addressProof=event.target.files[0];
   this.reader.onload=e=>this.showPass=this.reader.result;
    this.reader.readAsDataURL(this.addressProof);
  }

  onPanCard(event){
this.pancard=event.target.files[0];


  }
  onIncomeTaxDocument(event){
    this.incomeTax=event.target.files[0]
  }
  onAadharCard(event){

    this.aadharCard=event.target.files[0]

  }
  onPhoto(event){
    this.photo=event.target.files[0]

  }

  onSalarySlip(event){
   this.salarySlip=event.target.files[0]
  }

  onBuildingPermission(event){

    this.buildingpermission=event.target.files[0]
  }

  onLayout(event){
  this.layout=event.target.files[0]

  }

  onBuildingPlan(event){
    this.buildingPlan=event.target.files[0]

  }
  onEsimate(event){
    this.estimate=event.target.files[0]
  }
  onNoc(event){
   this.noc=event.target.files[0]
  }

}
