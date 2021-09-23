import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AdminPageComponent } from './admin/components/admin-page/admin-page.component';
import { LoginComponent } from './admin/components/login/login.component';
import { ManageAirlinesComponent } from './admin/components/manage-airlines/manage-airlines.component';
import { ManageDiscountsComponent } from './admin/components/manage-discounts/manage-discounts.component';
import { ManageFlightsComponent } from './admin/components/manage-flights/manage-flights.component';

export const routes: Route[] = [


  {path: "admin",
    children:[
      
      {path: "", component: LoginComponent}, 
      {path: "manage-airlines", component: ManageAirlinesComponent}, 
      {path: "manage-flights", component: ManageFlightsComponent},
      {path: "manage-discounts", component:ManageDiscountsComponent }
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
