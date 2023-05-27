import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordRoutingModule } from './dashbord-routing.module';
import { SidenavComponent } from './templates/sidenav/sidenav.component';
import { BodyComponent } from './templates/body/body.component';
import { FooterComponent } from './templates/footer/footer.component';
import { DashComponent } from './templates/dash/dash.component';
import { NavComponent } from './templates/nav/nav.component';
import { TransformNamePipe } from './Pipe/transform-name.pipe';




@NgModule({
  declarations: [
    SidenavComponent,
    BodyComponent,
    FooterComponent,
    DashComponent,
    NavComponent,
    TransformNamePipe,
    SidenavComponent,
 
  ],
  imports: [
    CommonModule,
    DashbordRoutingModule,
  ]
})
export class DashbordModule { }
