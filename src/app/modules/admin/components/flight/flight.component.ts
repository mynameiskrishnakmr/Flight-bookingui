import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Flight } from '../../models/flight.models';
import { ManageFlightsService } from '../../services/manage-flights.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {


  flight:Flight=new Flight("","","","","","",new Date,"","");
  
  constructor(public manageFlightsService: ManageFlightsService, private router:Router) {
    
   }

  ngOnInit(): void {
  }

  modifyFlight(){

    this.manageFlightsService.modifyFlight

    if(this.manageFlightsService.flightForm.valid){
      this.flight=this.manageFlightsService.flightForm.value;
      console.log(this.flight);
      this.manageFlightsService.modifyFlight(this.flight,this.flight.airlineId,this.flight.flightId).subscribe(
        (response:any)=> {
          console.log("response"+response);
          this.router.navigate(["/admin/manage-flights"]);
        }

        );
    }

  }

  goBack(){
    this.router.navigate(["/admin/manage-flights"]);
  }

}
