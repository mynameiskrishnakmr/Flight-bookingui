import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  isSubmitted = false;
  constructor() {


    this.loginForm =  new FormGroup({

         "username": new FormControl("",
             Validators.required),
         "password" : new FormControl( "",Validators.required)
       });
   }

  ngOnInit(): void {
  }

  getLogin(){

    console.log(this.loginForm);
    this.isSubmitted = true;

  }

  get formControls() { return this.loginForm.controls; }
}
