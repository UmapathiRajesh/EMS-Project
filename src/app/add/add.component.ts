import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  submit(Form:NgForm){
    console.log(Form.value);
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
