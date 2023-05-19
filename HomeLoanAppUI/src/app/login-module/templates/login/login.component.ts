import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router, private fb:FormBuilder){}

  logIn:FormGroup;


  ngOnInit(){
      this.logIn =  this.fb.group({
         username:[],
         password:[]
       })
  }

  signIn(){

    console.log(this.logIn.value)
   // this.router.navigate(['dash'])
  }

}
