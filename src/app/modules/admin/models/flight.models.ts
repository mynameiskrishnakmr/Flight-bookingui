import { Time } from "@angular/common";

export class Flight {

    constructor(public flightId:string
        ,public flightName:string
        ,public from: string
        , public to:string
        , public dateTime:string
        , public date:Date
        , public price :string
        , public seats:string){

    }
}
