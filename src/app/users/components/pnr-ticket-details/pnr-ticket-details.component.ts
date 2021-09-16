import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/service/ticket.service';

@Component({
  selector: 'app-pnr-ticket-details',
  templateUrl: './pnr-ticket-details.component.html',
  styleUrls: ['./pnr-ticket-details.component.css']
})
export class PnrTicketDetailsComponent implements OnInit {

  ticketDetails:any="";
  ticketPassengers:any[]=[];
  today=new Date();
  constructor(private ticketService : TicketService) { 
    
    
  }

  ngOnInit(): void {
    this.ticketService.getTicketDetailsWithPNR().subscribe((response:any)=>{
      this.ticketDetails=response;
      this.ticketPassengers= this.ticketDetails.passengers;
  
    }
    );
  }


  cancelTicket(){

    this.ticketService.cancelTicket(this.ticketDetails.pnr).subscribe((response:any) =>{

      console.log("fina delete respon"+response);
    });
    
  }
}
