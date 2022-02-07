import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from '../service/service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private data:ServiceService){}
  canActivate(){
    if(this.data.matching()){
      alert('You are successfully logged in!!!')
return true
    }else{
      alert('Please Enter Valid correct User Id and password!!!')
      return false
    }
  }
}
