import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
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
  }
  constructor() { }

  ngOnInit(): void {
  }

}
