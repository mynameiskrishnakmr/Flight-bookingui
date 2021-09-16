import { Passenger } from "./passenger.mode";

export class Ticketdetails {

    constructor(
        public flightName:string="", 
        public flightdate:string="",
        public flightTime:string= "",
        public pnr:string="", 
        public status:string="",
        public price:string= "",
        public userId:string="", 
        public passengers:Passenger[]=[]
    ){}
}
