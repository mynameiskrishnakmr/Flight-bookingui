import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/service/flight.service';

@Component({
  selector: 'app-searchflights',
  templateUrl: './searchflights.component.html',
  styleUrls: ['./searchflights.component.css']
})
export class SearchflightsComponent implements OnInit {


  public flightFrom:string ="";
  public flightTo:string ="";
  public dateOfJourney:Date =new Date;  
  public url:string ="http://3.143.221.2:9091/api/v1.0/flights/search?";
  public minDate =  new Date();
  public flights :any[]=[];
  
  constructor(private http : HttpClient, private flightService:FlightService){

  }

  

  ngOnInit(): void {
      
  }

  searchFlights(){
    console.log(`${this.flightFrom} flight date: ${this.dateOfJourney}`);
    this.http.get(this.url+'from='+this.flightFrom+'&to='+this.flightTo+'&date='+this.dateOfJourney).subscribe((response:any) =>{
      console.log(response);
      this.flights=response;
    } );
   
    console.log(this.flights);
  }

  setFlightId(flightId: string){
   
    localStorage.getItem("user");
    this.flightService.setflightId(flightId);
    
    console.log(this.flightService.getflightId());
    

  }

}
