import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './templates/dash/dash.component';



 const routes: Routes = [
  {path:'', component:DashComponent ,

  children:[
     {
       path:'re',
        loadChildren:()=> import('src/app/Modules/re/re.module').then(e=>e.ReModule)
     },
     {
      path:'oe',
       loadChildren:()=> import('src/app/Modules/oe/oe.module').then(e=>e.OeModule)
     },
     {
      path:'cm',
       loadChildren:()=> import('src/app/Modules/ce/ce.module').then(e=>e.CeModule)
     },
     {
      path:'ah',
       loadChildren:()=> import('src/app/Modules/ah/ah.module').then(e=>e.AhModule)
     }
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordRoutingModule { }
