import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  signupForm  :FormGroup;
  isSubmitted = false;
  constructor() {


    this.signupForm =  new FormGroup(
      {
      "firstname": new FormControl("",Validators.required),
      "lastname": new FormControl("",Validators.required),
      "username" : new FormControl( "",[Validators.required, Validators.pattern("[A-Za-z0-9._]+@[a-z0-9.]+\\.[a-z]{2,3}")]),
      "password": new FormControl("",Validators.required),
      "gender" : new FormControl("",Validators.required)
    });
   }

  ngOnInit(): void {
  }


  signup(){


    console.log("signup function");
    this.isSubmitted = true;

  }

  get formControls() { return this.signupForm.controls; }
}
