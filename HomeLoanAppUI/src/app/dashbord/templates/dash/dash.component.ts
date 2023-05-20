import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {

  constructor(private router:ActivatedRoute){}





   roleType:any
  ngOnInit(){

      this.router.paramMap.subscribe(param=>{
          const data = param.get('data');
          this.roleType    = JSON.parse(data).body;
          console.log(this.roleType)
      })
    sessionStorage.setItem("menuesData", JSON.stringify(this.roleType));
  }



}
