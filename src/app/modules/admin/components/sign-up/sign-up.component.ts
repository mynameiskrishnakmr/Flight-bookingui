import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../../services/signup.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  signupForm  :FormGroup;
  isSubmitted = false;
  data:any;
  constructor(private signupService:SignupService,private router:Router) {


    this.signupForm =  new FormGroup(
      {
      "firstname": new FormControl("",Validators.required),
      "lastname": new FormControl("",Validators.required),
      "userId" : new FormControl( "",[Validators.required, Validators.pattern("[A-Za-z0-9._]+@[a-z0-9.]+\\.[a-z]{2,3}")]),
      "password": new FormControl("",Validators.required),
      "gender" : new FormControl("",Validators.required)
    });
   }

  ngOnInit(): void {
  }


  signup(){
    console.log("signup function");
    this.isSubmitted = true;
    if(this.signupForm.valid){
      this.signupService.signup(this.signupForm.value).subscribe((response:any)=>{
        this.data=response;
        if(this.data.userId!=null)
          this.router.navigate(["/admin/login"]);
        else{

        }
        }
      )
        
    }
    
  }

  get formControls() { return this.signupForm.controls; }
}
