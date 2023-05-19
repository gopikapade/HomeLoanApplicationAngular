import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReRoutingModule } from './re-routing.module';
import { CheckEnquiryComponent } from './check-enquiry/check-enquiry.component';


@NgModule({
  declarations: [
    CheckEnquiryComponent
  ],
  imports: [
    CommonModule,
    ReRoutingModule
  ]
})
export class ReModule { }
