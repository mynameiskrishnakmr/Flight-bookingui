import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { jsPDF } from 'jspdf';
import { Passenger } from 'src/app/models/passenger.mode';
import { BookService } from 'src/app/service/book.service';
import { FlightService } from 'src/app/service/flight.service';

import autoTable from 'jspdf-autotable'


@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {
  isSubmitted: boolean=false;
  ngOnInit(): void {
   
  }
 //public flightId:string="12"; //to be fetched from the search flight screen
  passengersForm : FormGroup;
  bookingForm : FormGroup;
  
  public passengers :Passenger[]=[];
  public couponCode : string="";
  public ticket :any;
  public ticketPassengers :any[]=[];
  public userId:string="";
  public couponReponse:any;
  public message:string="";
  public discountAmount:number=0;
  

  constructor(private flightService: FlightService,private fb:FormBuilder, private bookService:BookService){
    this.passengersForm= this.fb.group({
      name:['',Validators.required],
      age:['',Validators.required],
      gender:['',Validators.required]
    });

    this.bookingForm=new FormGroup({
      couponcode:new FormControl(""),
      userId: new FormControl("",
      [Validators.required,Validators.pattern("[A-Za-z0-9._]+@[a-z0-9.]+\\.[a-z]{2,3}")]
      )
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
    this.isSubmitted=true;
    if(this.bookingForm.valid){
        this.userId=this.bookingForm.value.userId;
        let noOfPassengers = this.passengers.length
        console.log("coupon code hh"+ this.bookingForm.value.couponcode);
        this.bookService.applycoupon(this.flightService.getflightId(),this.userId,  noOfPassengers, this.bookingForm.value.couponcode ).subscribe((response:any)=>{
          console.log(response);
          this.couponReponse=response;
          this.message=response.couponStatus;
          this.discountAmount=response.discount;
        });
      }

  }

  bookticket(){
    this.userId=this.bookingForm.value.userId;
    this.bookService.bookticket(this.flightService.getflightId(), this.passengers, this.bookingForm.value.couponcode, this.userId).subscribe((response:any)=>{
      console.log(response);
      this.ticket=response;
     this.ticketPassengers= this.ticket.passengers;
    });
  }

  downloadPDF() 
  {
    
    let data = document.getElementById('ticket1')!; 
    console.log(data);

    const doc = new jsPDF()
    //var res = autoTableHtmlToJson('ticket1');
    //autoTable(res.columns, res.data);
    autoTable(doc, { html: 'ticket1' });
    doc.save('table.pdf')
  }

}
