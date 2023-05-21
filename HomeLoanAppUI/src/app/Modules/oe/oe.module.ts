import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OeRoutingModule } from './oe-routing.module';
import { EnquiriesComponent } from './enquiries/enquiries.component';
import { CibilComponent } from './cibil/cibil.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EnquiriesComponent,
    CibilComponent
  ],
  imports: [
    CommonModule,
    OeRoutingModule,
    FormsModule
  ]
})
export class OeModule { }
