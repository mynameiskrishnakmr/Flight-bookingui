import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Airline } from '../models/airline.model';

@Injectable({
  providedIn: 'root'
})
export class ManageAirlineService {
  
  url="http://localhost:9091/api/v1.0/admin/airline";
  

  constructor(private http:HttpClient) { }


  addAirline(airline: Airline) {

      let jsonString=JSON.stringify(airline);
      let headers = new HttpHeaders({
        'Content-Type': 'application/json' });
      let options = { headers: headers };
      console.log(jsonString);
      return this.http.post(this.url, jsonString,options);
  }

  getAllAirline(){
    return this.http.get(this.url);

  }

  blockAirline(airlineId: string) {

    return this.http.put(this.url+"/"+airlineId,{});

  
  }
 
}