import { Routes } from "@angular/router";
import { DiscountComponent } from "./components/discount/discount.component";
import { FlightComponent } from "./components/flight/flight.component";
import { LoginComponent } from "./components/login/login.component";

import { ManageAirlinesComponent } from "./components/manage-airlines/manage-airlines.component";
import { ManageDiscountsComponent } from "./components/manage-discounts/manage-discounts.component";
import { ManageFlightsComponent } from "./components/manage-flights/manage-flights.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { AuthGuard } from "./guards/auth.guard";


export const routes:Routes =[
            {path: "login", component: LoginComponent}, 
              {path: "sign-up", component: SignUpComponent},
              
              {path: "manage-airlines", component: ManageAirlinesComponent, canActivate:[AuthGuard]}, 
              {path: "manage-flights", component: ManageFlightsComponent,  canActivate:[AuthGuard]},
              {path: "manage-discounts", component:ManageDiscountsComponent,  canActivate:[AuthGuard] },
              {path: "discount-modify", component:DiscountComponent,  canActivate:[AuthGuard] },
              {path: "flight-modify", component:FlightComponent,  canActivate:[AuthGuard] }
              

]