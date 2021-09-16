import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Passenger } from '../models/passenger.mode';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  userId : string ="111"; //temp value, to be fetched from local storage
  url : string= "http://localhost:9091/api/v1.0/booking/users";
  stringJson: string="";
  constructor( private http:HttpClient) { }


  applycoupon(flightId: string, passengers: Passenger[], couponCode: string) {
    this.stringJson = JSON.stringify(passengers);
    console.log(`book ticket service ${this.stringJson} dsdsd`);

    let headers = new HttpHeaders({
      'Content-Type': 'application/json' });
    let optionsGet = { headers: headers };
     return this.http.get(this.url+"/"+this.userId+"/flight/"+flightId+"?discountCoupon="+couponCode,optionsGet);
  }

  bookticket(flightId: string, passengers:Passenger[], couponCode:string) {
    
    this.stringJson = JSON.stringify(passengers);
    console.log(`book ticket service ${this.stringJson} dsdsd`);

    let headers = new HttpHeaders({
      'Content-Type': 'application/json' });
    let options = { headers: headers };
    return this.http.post(this.url+"/"+this.userId+"/flight/"+flightId+"?discountCoupon="+couponCode,this.stringJson,options);
  }

}

