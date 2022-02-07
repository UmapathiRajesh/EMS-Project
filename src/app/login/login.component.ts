import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login =new FormGroup({
    umail:new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]),
    upass:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(12)])
  })
  constructor(private val:ServiceService,private router:Router ){}
  value1:any
  

  get umail(){
   return this.login.get('umail')
  }
  get upass(){
    return this.login.get('upass')
  }
  submit(){
  
    console.log(this.login.value)
    const c=this.login.value.umail;
    localStorage.setItem('Email',c);
    const d=this.login.value.upass;
    localStorage.setItem('Pass',d)
  
  if(this.val.matching()){
    this.router.navigate(['add'])
    // alert('Successfully Logged in!!!')
    return true
  }else{
    alert('Enter correct password and email-id')
    return false
  }
  }

    ngOnInit(): void {
      this.value1=this.val.matching()
    }
 
}
