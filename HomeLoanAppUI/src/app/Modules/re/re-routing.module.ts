import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckEnquiryComponent } from './check-enquiry/check-enquiry.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';

const routes: Routes = [
   {path:'enquiry', component:CheckEnquiryComponent},
   {path:'loan',component:LoanApplicationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReRoutingModule { }
