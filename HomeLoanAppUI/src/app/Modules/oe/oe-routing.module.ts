import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnquiriesComponent } from './enquiries/enquiries.component';
import { CibilComponent } from './cibil/cibil.component';

const routes: Routes = [
    {path:'forvenquiry', component:EnquiriesComponent},
    {path:'cibil', component:CibilComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OeRoutingModule { }
