import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AhRoutingModule } from './ah-routing.module';
import { CreateCustomerAccountComponent } from './create-customer-account/create-customer-account.component';

import { LoanDisburstmentComponent } from './loan-disburstment/loan-disburstment.component';
import { LeggerComponent } from './legger/legger.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateCustomerAccountComponent,

    LoanDisburstmentComponent,
    LeggerComponent
  ],
  imports: [
    CommonModule,
    AhRoutingModule,ReactiveFormsModule
  ]
})
export class AhModule { }
