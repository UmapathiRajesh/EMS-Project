import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  submit(Form:NgForm){
    console.log(Form.value);
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
