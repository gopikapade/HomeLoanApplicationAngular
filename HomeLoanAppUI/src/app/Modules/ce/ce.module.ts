import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CeRoutingModule } from './ce-routing.module';
import { ApplicationComponent } from './application/application.component';
import { CheckDocumentsComponent } from './check-documents/check-documents.component';
import { FormsModule } from '@angular/forms';
import { SanctionLetterComponent } from './sanction-letter/sanction-letter.component';


@NgModule({
  declarations: [
    ApplicationComponent,
    CheckDocumentsComponent,
    SanctionLetterComponent
  ],
  imports: [
    CommonModule,
    CeRoutingModule,
    FormsModule
  ]
})
export class CeModule { }
