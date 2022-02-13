import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private data1:ServiceService, private route: Router) { }

  regForm=new FormGroup({
    uname:new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z ]+$')]),
    umail:new FormControl("",[Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]),
    
    upass:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
    ucpass:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
  },
  )
  value:any
  
  get uname(){
    return this.regForm.get('uname')
  }
  get usname(){
    return this.regForm.get('usname')
  }
  get umail(){
    return this.regForm.get('umail')
  }
  get upass(){
    return this.regForm.get('upass')
  }
  get ucpass(){
   
    return this.regForm.get('ucpass')
   
  }
  submit(){
    console.log(this.regForm.value)

    const a=this.regForm.value.umail; 



    
    // localStorage.setItem('Mail-Id',a)
    const b=this.regForm.value.upass;
    // localStorage.setItem('Password',b)
    let userData=new Array();
    userData=JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[]
if(userData.some((v)=>{console.log(a); return v.umail===a}))
{
  
  alert("Duplicate data!!! Please try with another name");
}
else
{
  
  alert('Successfully logged in!!!')
  userData.push(
this.regForm.value
  )
localStorage.setItem("users",JSON.stringify(userData));
}
    this.regForm.reset()
    this.route.navigate(["signin"])
  }
  
    
  
    ngOnInit(): void {
      this.value=this.data1.matching()
    }
  
}
