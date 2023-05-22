import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CeRoutingModule } from './ce-routing.module';
import { ApplicationComponent } from './application/application.component';
import { CheckDocumentsComponent } from './check-documents/check-documents.component';


@NgModule({
  declarations: [
    ApplicationComponent,
    CheckDocumentsComponent
  ],
  imports: [
    CommonModule,
    CeRoutingModule,

  ]
})
export class CeModule { }
