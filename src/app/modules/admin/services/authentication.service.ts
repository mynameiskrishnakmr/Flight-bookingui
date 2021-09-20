import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Router } from '@angular/router';
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    url:string="http://localhost:9091/authenticate/authenticate";
    stringJson: string="";
    constructor(private http: HttpClient, private router:Router) {}

    getLogin(user : User){

      this.stringJson = JSON.stringify(user);
      console.log( "string json "+this.stringJson);
      let headers = new HttpHeaders({
        'Content-Type': 'application/json' 
      });
      let options = { headers: headers };
     return  this.http.post(this.url, this.stringJson,options);
     
    }

    loggedIn(){

      return !!localStorage.getItem('token');
    }

    getToken(){

      return localStorage.getItem('token');
    }

    getLogout(){

      localStorage.removeItem('token');
      this.router.navigate(["/login"]);

    }

}