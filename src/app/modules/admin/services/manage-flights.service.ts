import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Flight } from '../models/flight.models';

@Injectable({
  providedIn: 'root'
})
export class ManageFlightsService {
  
 
  url:string="http://3.143.221.2:9091/api/v1.0/admin/airline/";
  flightForm : FormGroup;
  flight:Flight=new Flight("","","","","","",new Date,"","");

  constructor(private http:HttpClient) {
    this.flightForm= new FormGroup({
      "flightId": new FormControl("", Validators.required),
      "airlineId": new FormControl("", Validators.required),
      "flightName": new FormControl("", Validators.required),
      "from" : new FormControl("",Validators.required),
      "to" : new FormControl("",Validators.required),
      "dateTime" : new FormControl( "",Validators.required),
      "date" : new FormControl( new Date,Validators.required),
      "price" : new FormControl( "",Validators.required),
      "seats" : new FormControl( "",Validators.required),
      

    });
    
   }

  getAllFlights() {
    return this.http.get(this.url+"flights");
  }

  addFlights(flight: Flight, airlineId:string) {
    let jsonString=JSON.stringify(flight);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json' });
    let options = { headers: headers };
    console.log(jsonString);
    return this.http.post(this.url+airlineId+"/flight/",jsonString,options);
  }
  
  modifyFlight(flight: Flight,airlineId:string ,flightId:string) {
    let jsonString=JSON.stringify(flight);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json' });
    let options = { headers: headers };
    console.log(jsonString);
    return this.http.put(this.url+airlineId+"/flight/"+flightId,jsonString,options);
    
  }

  deleteFlight(airlineId:string ,flightId:string){

    return this.http.delete(this.url+airlineId+"/flight/"+flightId);
  }

  populateForm(flight: any,airlineId:any) {
    console.log("flight value"+flight.flightId);

    this.flight= new Flight(flight.flightId,flight.flightName,airlineId,flight.from, flight.to,flight.dateTime,
      flight.date,flight.price,  flight.seats  );
    console.log("flight.flightId"+flight.flightId);
    this.flightForm.setValue(this.flight);
    
  }
}
