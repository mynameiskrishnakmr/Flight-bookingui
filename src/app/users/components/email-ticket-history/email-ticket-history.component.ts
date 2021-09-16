import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/service/ticket.service';

@Component({
  selector: 'app-email-ticket-history',
  templateUrl: './email-ticket-history.component.html',
  styleUrls: ['./email-ticket-history.component.css']
})
export class EmailTicketHistoryComponent implements OnInit {

  ticketHistory:any=[];
  constructor(private ticketService:TicketService) {

   
   }

  ngOnInit(): void {
    this.ticketService.getBookingHistoryWithEmail().subscribe((response:any)=>{
      console.log("in service response email "+response);
      this.ticketHistory=response;
      
    })
  }

}
