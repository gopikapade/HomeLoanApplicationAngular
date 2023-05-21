import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModuleRoutingModule } from './login-module-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponent } from './templates/landing-page/landing-page.component';
import { EnquiryFormComponent } from './templates/enquiry-form/enquiry-form.component';
import { LoginComponent } from './templates/login/login.component';
import { EMIcalculatorComponent } from './templates/emicalculator/emicalculator.component';



@NgModule({
  declarations: [
        LandingPageComponent,
        EnquiryFormComponent,
        LoginComponent,
        EMIcalculatorComponent
  ],
  imports: [
    CommonModule,
    LoginModuleRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginModuleModule { }
