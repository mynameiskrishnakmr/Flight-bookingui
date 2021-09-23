import { Component, OnInit } from '@angular/core';
import { Flight } from '../../models/flight.models';
import { ManageFlightsService } from '../../services/manage-flights.service';

@Component({
  selector: 'app-manage-flights',
  templateUrl: './manage-flights.component.html',
  styleUrls: ['./manage-flights.component.css']
})
export class ManageFlightsComponent implements OnInit {


  flights :any[]=[];
  flight :Flight= new Flight("","","","","",new Date,"","")
  airlineId:string="";
  message:string ="";

  constructor(private manageFlightsService: ManageFlightsService) { }

  ngOnInit(): void {

    this.getAllFlights();
    
  }

  addFlight(){

    this.manageFlightsService.addFlights(this.flight,this.airlineId ).subscribe((response:any) =>{
        console.log(response);
        this.flight= response;
        this.getAllFlights();
      })
    }

    


  getAllFlights(){
    this.manageFlightsService.getAllFlights().subscribe((response:any)=>{
        console.log("All flights"+response);
        this.flights=response;
      }
    )
  }


  modifyFlight(flight:Flight, airlineId:string){

    this.manageFlightsService.modifyFlight(flight,airlineId,flight.flightId).subscribe((response:any) =>{
      console.log("Modified flight"+response);
      
      this.getAllFlights();
    })
  }

  deleteFlight(airlineId:string,flightId:string){

    this.manageFlightsService.deleteFlight(airlineId,flightId).subscribe((response:any)=>
    {
      this.message=response;
      console.log("Delete flight"+response);
      this.getAllFlights();
    })

  }

  }

