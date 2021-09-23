import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight } from '../models/flight.models';

@Injectable({
  providedIn: 'root'
})
export class ManageFlightsService {
 
  url:string="http://localhost:9091/api/v1.0/admin/airline/";
  constructor(private http:HttpClient) { }

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
}
