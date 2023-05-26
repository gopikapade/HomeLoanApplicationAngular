import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerAccountComponent } from './create-customer-account/create-customer-account.component';

import { LoanDisburstmentComponent } from './loan-disburstment/loan-disburstment.component';
import { LeggerComponent } from './legger/legger.component';
import { ApplicationFromReComponent } from './application-from-re/application-from-re.component';

const routes: Routes = [
{path:'createaccount',component:CreateCustomerAccountComponent},
{path:'loandisbusrtment',component:LoanDisburstmentComponent},
{path:'ledger',component:LeggerComponent},
<<<<<<< HEAD

{path:'app' , component:ApplicationFromReComponent},
{path:'app/createaccount', component:CreateCustomerAccountComponent}
=======
{path:'app' , component:ApplicationFromReComponent},
{path:'app/createaccount', component:CreateCustomerAccountComponent}

>>>>>>> parent of 27c2a7b (Merge branch 'main' of https://github.com/lurnfx/HomeLoanApplicationAngular)

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AhRoutingModule { }
