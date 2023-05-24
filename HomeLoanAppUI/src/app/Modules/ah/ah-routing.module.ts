import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerAccountComponent } from './create-customer-account/create-customer-account.component';

import { LoanDisburstmentComponent } from './loan-disburstment/loan-disburstment.component';
import { LeggerComponent } from './legger/legger.component';

const routes: Routes = [
{path:'createaccount',component:CreateCustomerAccountComponent},

{path:'loandisbusrtment',component:LoanDisburstmentComponent},
{path:'legger',component:LeggerComponent}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AhRoutingModule { }
