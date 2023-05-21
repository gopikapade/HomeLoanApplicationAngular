import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReRoutingModule } from './re-routing.module';
import { CheckEnquiryComponent } from './check-enquiry/check-enquiry.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CheckEnquiryComponent,
    LoanApplicationComponent
  ],
  imports: [
    CommonModule,
    ReRoutingModule,ReactiveFormsModule,FormsModule
  ]
})
export class ReModule { }
