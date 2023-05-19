import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './templates/landing-page/landing-page.component';
import { EnquiryFormComponent } from './templates/enquiry-form/enquiry-form.component';
import { LoginComponent } from './templates/login/login.component';

const routes: Routes = [
   {path:'', component:LandingPageComponent, children:[
     {path:'enquiry', component:EnquiryFormComponent},
     {path:'login', component:LoginComponent}
   ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginModuleRoutingModule { }
