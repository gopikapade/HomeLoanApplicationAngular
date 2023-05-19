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

  roleMenues:Array<any>=Menues.RoleMenus;
  roles:string;


  ngOnInit(){

    // this.roles = sessionStorage.getItem('userType');
    // console.log(this.roles)



  }

  toggleSideNav() {
    this.isSideNavVisible = !this.isSideNavVisible;
  }

}
