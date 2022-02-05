import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { SigninComponent } from './signin/signin.component';
import { EmsComponent } from './ems/ems.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    EditComponent,
    AddComponent,
    SigninComponent,
    EmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
