import { Component } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(private routes:ActivatedRoute){}

  role:String;

  menues:any;
  ngOnInit(){
   const data = sessionStorage.getItem("menuesData");
   this.menues = JSON.parse(data);
  }

}
