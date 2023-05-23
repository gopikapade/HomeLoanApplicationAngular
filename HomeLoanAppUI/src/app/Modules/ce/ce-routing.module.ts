import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { CheckDocumentsComponent } from './check-documents/check-documents.component';

const routes: Routes = [
  {path:'application' , component:ApplicationComponent},
  {path:'Documents', component:CheckDocumentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CeRoutingModule {




 }
