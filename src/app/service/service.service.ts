import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  matching()
  {
    let a=localStorage.getItem('Mail-Id');
    let b=localStorage.getItem('Password');
    let c=localStorage.getItem('mail');
    let d=localStorage.getItem('psw')
    if(a===c && b===d){
      return true
    }else{
      
      return false
    }
    return
  }
  constructor() { }
}
