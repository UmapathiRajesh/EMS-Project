import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  // constructor(private route:Router)
  ngOnInit(): void {
  
  }
  
  value:any
  
  
  signup=new FormGroup({
    umail:new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]),
    upass:new FormControl("",[Validators.required,Validators.maxLength(12),Validators.minLength(6)])
  })
  get umail(){
    return this.signup.get('umail')
  }
  get upass(){
    return this.signup.get('upass')
  }
  submit(){
    console.log(this.signup.value)
    let a=this.signup.value.umail
    localStorage.setItem('mail',a)
    let b=this.signup.value.Password
    localStorage.setItem('password',b)
    
   

    
  
  }

  
  }
  

  

