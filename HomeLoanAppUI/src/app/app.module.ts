import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LandingPageComponent } from './templates/landing-page/landing-page.component';
import { LoginComponent } from './templates/login/login.component';
import { EnquiryFormComponent } from './templates/enquiry-form/enquiry-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';







@NgModule({
  declarations: [
    AppComponent,

    LandingPageComponent,
    LoginComponent,
    EnquiryFormComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
