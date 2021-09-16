import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private flightId : string ="";

  constructor() { }

  public setflightId(flightId:string){
    this.flightId=flightId;
  }

  public getflightId(){
    return this.flightId;
  }

}
