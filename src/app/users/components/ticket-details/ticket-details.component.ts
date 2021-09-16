import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/service/ticket.service';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {

  emailId: string ="";
  pnr :string="";
  
  constructor(private ticketService :TicketService) { }

  ngOnInit(): void {
   
  }

  getBookingHistoryWithEmail(){
    console.log("in booking hostory");
    this.ticketService.email=this.emailId;
  }

  getTicketDetailsWithPNR(){

    console.log("in ticket detais ");
    this.ticketService.pnr=this.pnr;
    


    }

}
