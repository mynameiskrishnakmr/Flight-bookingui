import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Passenger } from 'src/app/models/passenger.mode';
import { BookService } from 'src/app/service/book.service';
import { FlightService } from 'src/app/service/flight.service';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {
  ngOnInit(): void {
   
  }
 //public flightId:string="12"; //to be fetched from the search flight screen
  passengersForm : FormGroup;
  public passengers :Passenger[]=[];
  public couponCode : string="";
  public ticket :any;
  public ticketPassengers :any[]=[];

  constructor(private flightService: FlightService,private fb:FormBuilder, private bookService:BookService){
    this.passengersForm= this.fb.group({
      name:['',Validators.required],
      age:['',Validators.required],
      gender:['',Validators.required]
    });
  }
  
  addPassengers(){
    this.passengers.push(this.passengersForm.value);
    console.log(this.passengers);
    
    this.passengersForm.reset();
  }
  
 
  resetPassengers(){
    this.passengersForm.reset();
  }

  removePassenger(){

  }

  applyCoupon(){
    console.log("inside apply coupon");
    this.bookService.applycoupon(this.flightService.getflightId(), this.passengers, this.couponCode).subscribe((response:any)=>{
      console.log(response);
    });

  }

  bookticket(){
    console.log("inside book ticket");
    console.log(this.passengers);
    this.bookService.bookticket(this.flightService.getflightId(), this.passengers, this.couponCode).subscribe((response:any)=>{
      console.log(response);
      this.ticket=response;
     this.ticketPassengers= this.ticket.passengers;
    });
  }

  

  


}
