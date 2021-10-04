import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

import { SearchflightsComponent } from './components/searchflights/searchflights.component';

import { AuthGuard } from './modules/admin/guards/auth.guard';
import { ManageAirlinesComponent } from './modules/admin/components/manage-airlines/manage-airlines.component';
import { BookTicketComponent } from './users/components/book-ticket/book-ticket.component';
import { EmailTicketHistoryComponent } from './users/components/email-ticket-history/email-ticket-history.component';
import { PnrTicketDetailsComponent } from './users/components/pnr-ticket-details/pnr-ticket-details.component';
import { TicketDetailsComponent } from './users/components/ticket-details/ticket-details.component';
import { UserPageComponent } from './users/components/user-page/user-page.component';
import { UserModule } from './users/module/user/user.module';
import { ManageDiscountsComponent } from './modules/admin/components/manage-discounts/manage-discounts.component';
import { ManageFlightsComponent } from './modules/admin/components/manage-flights/manage-flights.component';
import { AdminPageComponent } from './modules/admin/components/admin-page/admin-page.component';
import { LoginComponent } from './modules/admin/components/login/login.component';
import { SignUpComponent } from './modules/admin/components/sign-up/sign-up.component';
import { DiscountComponent } from './modules/admin/components/discount/discount.component';
import { FlightComponent } from './modules/admin/components/flight/flight.component';
export const routes: Route[] = [
 // {path: "login", component: LoginComponent},
 // {path: "sign-up", component: SignUpComponent},
  {path: "search-flights", component: SearchflightsComponent},
  {path: "ticket", component: TicketDetailsComponent,},
  {path: "user/ticket-details", component: TicketDetailsComponent}, 
  {path: "user/book-ticket", component: BookTicketComponent},
  {path: "user/email-ticket-history", component:EmailTicketHistoryComponent },
  {path: "user/pnr-ticket-details", component: PnrTicketDetailsComponent},
 // {path: "admin/manage-airlines", component: ManageAirlinesComponent},

 /*{path: "admin",
 loadChildren: ()=>import("./modules/admin/admin.module").then(Module=>Module.AdminModule)},*/
      {path: "admin",
            children:[

              {path: "login", component: LoginComponent}, 
              {path: "sign-up", component: SignUpComponent},
              {path: "manage-airlines", component: ManageAirlinesComponent, canActivate:[AuthGuard]}, 
              {path: "manage-flights", component: ManageFlightsComponent, canActivate:[AuthGuard]},
              {path: "manage-discounts", component:ManageDiscountsComponent , canActivate:[AuthGuard]},
              {path: "discount-modify", component:DiscountComponent,  canActivate:[AuthGuard] },
              {path: "flight-modify", component:FlightComponent,  canActivate:[AuthGuard] },
              {path: "", redirectTo: "login",pathMatch:"full"},
              {path: "**", redirectTo: "manage-airlines"}
            ],
              component:AdminPageComponent
          },
  {path: "", redirectTo:"/search-flights",pathMatch:"full"}


  // {path:"user",
  // loadChildren: ()=>import("./users/module/user/user.module").then(Module=>Module.UserModule)}
  // {path: "user", 

  // children:[
  //     {path: "user/ticket-details", component: TicketDetailsComponent}, 
  //     {path: "user/book-ticket", component: BookTicketComponent},
  //     {path: "user/email-ticket-history", component:EmailTicketHistoryComponent },
  //     {path: "user/ pnr-ticket-details", component: PnrTicketDetailsComponent}
  //   ],
  //   component:UserPageComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
