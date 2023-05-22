import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  roleType:any;

  constructor(private router:ActivatedRoute, private route:Router ){
    // this.roleType= this.route?.getCurrentNavigation()?.extras?.state?.['data'];
  }







  ngOnInit(){


      this.router.paramMap.subscribe(param=>{
          const data = param.get('data');
          this.roleType    = JSON.parse(data);
          console.log(this.roleType)
      })
     sessionStorage.setItem("menuesData", JSON.stringify(this.roleType.body));

      console.log(this.roleType)

     }

}
