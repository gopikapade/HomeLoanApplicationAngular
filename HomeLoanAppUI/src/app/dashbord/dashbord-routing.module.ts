import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './templates/dash/dash.component';



 const routes: Routes = [
  {path:'', component:DashComponent }

  // children:[
//      {
//        path:'re',
//         loadChildren:()=> import('src/app/moduleExe/RE/re/re-routing.module').then(e=>e.ReRoutingModule)
//      },
//      {
//       path:'oe',
//        loadChildren:()=> import('src/app/moduleExe/OE/oe/oe-routing.module').then(e=>e.OeRoutingModule)
//      },
//      {
//       path:'cm',
//        loadChildren:()=> import('src/app/moduleExe/CM/cm/cm-routing.module').then(e=>e.CmRoutingModule)
//      },
//      {
//       path:'ah',
//        loadChildren:()=> import('src/app/moduleExe/AH/ah/ah-routing.module').then(e=>e.AhRoutingModule)
//      }
//   ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordRoutingModule { }
