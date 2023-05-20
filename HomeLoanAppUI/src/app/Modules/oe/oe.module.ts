import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OeRoutingModule } from './oe-routing.module';
import { EnquiriesComponent } from './enquiries/enquiries.component';
import { CibilComponent } from './cibil/cibil.component';


@NgModule({
  declarations: [
    EnquiriesComponent,
    CibilComponent
  ],
  imports: [
    CommonModule,
    OeRoutingModule
  ]
})
export class OeModule { }
