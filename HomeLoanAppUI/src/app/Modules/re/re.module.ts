import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReRoutingModule } from './re-routing.module';
import { CheckEnquiryComponent } from './check-enquiry/check-enquiry.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CheckEnquiryComponent,
    LoanApplicationComponent
  ],
  imports: [
    CommonModule,
    ReRoutingModule,ReactiveFormsModule
  ]
})
export class ReModule { }
