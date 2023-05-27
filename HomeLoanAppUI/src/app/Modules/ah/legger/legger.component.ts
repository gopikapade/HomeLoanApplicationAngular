import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AhService } from 'src/app/service/ah.service';


@Component({
  selector: 'app-legger',
  templateUrl: './legger.component.html',
  styleUrls: ['./legger.component.css']
})
export class LeggerComponent implements OnInit {
  
  constructor(private ahservice:AhService, private fb:FormBuilder){}
  
  customers: any;
 
  ngOnInit(): void {

    this.ahservice.getAllLoanAcounts().subscribe((data:any)=>{
      this.customers =data.body
      console.log(this.customers)
    })
 
  }

}
