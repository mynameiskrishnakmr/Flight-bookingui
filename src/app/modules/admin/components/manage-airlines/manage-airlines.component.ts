import { Component, OnInit } from '@angular/core';

import { Airline } from '../../models/airline.model';
import { ManageAirlineService } from '../../services/manage-airline.service';

@Component({
  selector: 'app-manage-airlines',
  templateUrl: './manage-airlines.component.html',
  styleUrls: ['./manage-airlines.component.css']
})
export class ManageAirlinesComponent implements OnInit {

  airlineName:string ="";
  airlineEmail:string ="";
  airline:Airline= new Airline("","","");
  //airlineResponse:any=[];

  airlines:any=[];
  

  constructor(private manageAirline: ManageAirlineService) {

    this.getAllAirline();
  }

  

  ngOnInit(): void {
    
    
  }

  addAirline(){

    this.airline.airlineName=this.airlineName;
    this.airline.airlineEmail=this.airlineEmail;
    this.manageAirline.addAirline(this.airline).subscribe(
      (response:any)=> {
            console.log(response);
            this.getAllAirline();
      }
    );
  }



  blockAirline(airlineId:string){

    this.manageAirline.blockAirline(airlineId).subscribe((response:any)=>{

      console.log("blockairline"+response);
      this.getAllAirline();

    });
    

  }

  getAllAirline(){
      this.manageAirline.getAllAirline().subscribe((response:any)=>{
        console.log(response);
        this.airlines=response;
         }
      );
  }
  
}


