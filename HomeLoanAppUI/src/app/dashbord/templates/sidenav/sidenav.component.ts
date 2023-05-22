import { Component } from '@angular/core';



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
   console.log(data)
  }

  toggleSideNav() {
    this.isSideNavVisible = !this.isSideNavVisible;
  }

}
