import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './Guard/auth.guard';

import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [
  {path:"",redirectTo:"register", pathMatch:"full"},
  {path:"register",component:RegisterComponent},
  {path:"signin",component:SigninComponent },
  
  
  {path:"**",component:RegisterComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
