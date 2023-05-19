import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router, private fb:FormBuilder, private login:LoginService){}

  logIn:FormGroup;


  ngOnInit(){
      this.logIn =  this.fb.group({
         username:[],
         password:[]
       })
  }

  signIn(){

    console.log(this.logIn.value)
    this.login.validateLogin(this.logIn.value.username, this.logIn.value.password).subscribe((data:any)=>{
         console.log(data);
         this.router.navigate(['dash'], {state:{data:data}})
    },(responce:any)=>
    alert(responce.error))


  }

}
