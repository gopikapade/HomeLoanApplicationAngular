import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'',
  loadChildren:()=> import('src/app/login-module/login-module.module').then(e=>e.LoginModuleModule)},

  {path:'dash',
  loadChildren:()=> import('src/app/dashbord/dashbord.module').then(e=>e.DashbordModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
