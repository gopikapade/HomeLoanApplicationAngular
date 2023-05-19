import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckEnquiryComponent } from './check-enquiry/check-enquiry.component';

const routes: Routes = [
   {path:'enquiry', component:CheckEnquiryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReRoutingModule { }
