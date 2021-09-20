import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Routes, UrlTree } from '@angular/router';

import { Router } from '@angular/router' ;
import { AuthenticationService } from '../services/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public authService : AuthenticationService ,private router:Router){}

  canActivate():boolean{
    
    if(this.authService.loggedIn()){
      return true;
    }
    else{
      this.router.navigate(["/login"]);
      return false;

    }
  }
  
}
