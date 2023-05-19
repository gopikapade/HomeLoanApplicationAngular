import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< Updated upstream
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
>>>>>>> Stashed changes

import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< Updated upstream
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
=======
    AppRoutingModule,FormsModule,ReactiveFormsModule,
    HttpClientModule
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
