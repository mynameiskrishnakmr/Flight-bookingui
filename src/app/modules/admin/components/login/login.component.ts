import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { AuthenticationService } from '../../services/authentication.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  isSubmitted = false;
 
  user: User = new User("","");

  constructor(public  authService : AuthenticationService , private router:Router){

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
    this.user = this.loginForm.value;
    
    this.authService.getLogin(this.user).subscribe((response:any)=>{
        console.log(response);
        localStorage.setItem('token',response.token);
        this.router.navigate(["/admin/manage-airlines"]);
        this.authService.isLoggedIn=true;
        
    });
    
   

  }

  get formControls() { return this.loginForm.controls; }
}
