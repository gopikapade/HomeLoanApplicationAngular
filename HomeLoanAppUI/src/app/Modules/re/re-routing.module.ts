import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckEnquiryComponent } from './check-enquiry/check-enquiry.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { StatusComponent } from './status/status.component';
import { ApplicationSanctionLetterComponent } from './application-sanction-letter/application-sanction-letter.component';

const routes: Routes = [
   {path:'enquiry', component:CheckEnquiryComponent},
   {path:'canenquiry/loan',component:LoanApplicationComponent},
   {path:'canenquiry', component:StatusComponent },
   {path:'loan', component:LoanApplicationComponent},
   {path:'other', component:ApplicationSanctionLetterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReRoutingModule { }
