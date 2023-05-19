import { Component } from '@angular/core';
import { Menues } from 'src/app/model/menues';



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
  isSideNavVisible: boolean;

  constructor(){}


  roles:string;
  menues:any;
  ngOnInit(){
   const data = sessionStorage.getItem("menuesData")
   this.menues = JSON.parse(data);
  }

  toggleSideNav() {
    this.isSideNavVisible = !this.isSideNavVisible;
  }

}
