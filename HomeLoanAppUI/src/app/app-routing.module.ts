import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dashbord/templates/dash/dash.component';


const routes: Routes = [
  {path:'', loadChildren:()=> import('src/app/dashbord/dashbord.module').then(e=>e.DashbordModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
