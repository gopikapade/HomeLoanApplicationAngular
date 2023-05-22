import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReRoutingModule } from './re-routing.module';
import { CheckEnquiryComponent } from './check-enquiry/check-enquiry.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule} from 'ngx-pagination';
import { StatusComponent } from './status/status.component';


@NgModule({
  declarations: [
    CheckEnquiryComponent,
    LoanApplicationComponent,
    StatusComponent
  ],
  imports: [
    CommonModule,
    ReRoutingModule,ReactiveFormsModule,FormsModule,
    NgxPaginationModule
  ]
})
export class ReModule { }
