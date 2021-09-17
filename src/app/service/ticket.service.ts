import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  
  email:string ="";
  pnr:string="";
  

  url: string = "http://localhost:9091/api/v1.0/booking";
  

  constructor(private http:HttpClient) { }

  getBookingHistoryWithEmail() {
    return this.http.get(this.url+"/history/"+this.email);
  }

  getTicketDetailsWithPNR(){
    console.log("get ticket det method"+this.pnr);
    return this.http.get(this.url+"/ticket/"+this.pnr);
  }

  cancelTicket(pnr : string , userId:string){
    console.log("userid "+userId+"  pnr : "+pnr);
    return this.http.delete(this.url+"/users/"+userId+"/cancel/"+pnr);
  }
}

