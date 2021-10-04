import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  url:string="http://3.143.221.2:9091/api/v1.0/admin/register";
  constructor(private http:HttpClient) { }

  signup(formData:any){
    let jsonString=JSON.stringify(formData);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json' });
    let options = { headers: headers };
    console.log(jsonString);
    return this.http.post(this.url,jsonString,options);
  }
}
