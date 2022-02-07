import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  value1:any
  route: any;
  val: any;
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
    this.route.navigate(['signup'])
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
