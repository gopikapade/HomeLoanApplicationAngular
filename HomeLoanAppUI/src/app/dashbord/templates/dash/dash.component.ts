import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {

  constructor(private router:Router){}


  data?:any = this.router.getCurrentNavigation()?.extras?.state?.['data']

  roleType:any = this.data;


  ngOnInit(){
    console.log(this.data);
    sessionStorage.setItem("menuesData", JSON.stringify(this.roleType));
  }



}
