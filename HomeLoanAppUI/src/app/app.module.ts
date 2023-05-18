import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmiCalculatorComponent } from './templates/emi-calculator/emi-calculator.component';
import { LandingPageComponent } from './templates/landing-page/landing-page.component';
import { LoginComponent } from './templates/login/login.component';
import { EnquiryComponent } from './templates/enquiry/enquiry.component';

@NgModule({
  declarations: [
    AppComponent,
    EmiCalculatorComponent,
    LandingPageComponent,
    LoginComponent,
    EnquiryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
