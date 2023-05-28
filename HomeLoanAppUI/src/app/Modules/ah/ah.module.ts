import { NgModule } from '@angular/core';
import { CommonModule, PercentPipe } from '@angular/common';

import { AhRoutingModule } from './ah-routing.module';
import { CreateCustomerAccountComponent } from './create-customer-account/create-customer-account.component';

import { LoanDisburstmentComponent } from './loan-disburstment/loan-disburstment.component';
import { LeggerComponent } from './legger/legger.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplicationFromReComponent } from './application-from-re/application-from-re.component';



@NgModule({
  declarations: [
    CreateCustomerAccountComponent,

    LoanDisburstmentComponent,
    LeggerComponent,
    ApplicationFromReComponent
  ],
  imports: [
    CommonModule,
    AhRoutingModule,ReactiveFormsModule,FormsModule
  ]
})
export class AhModule { }
