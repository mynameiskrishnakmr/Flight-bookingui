import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Router } from '@angular/router';
@Injectable({ providedIn: 'root' })
export class AuthenticationService {


    url:string="http://3.143.221.2:9091/api/v1.0/admin/authenticate";
    stringJson: string="";
    isLoggedIn:boolean=false;


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
      this.isLoggedIn=false;
      this.router.navigate(["/admin/login"]);

    }

}