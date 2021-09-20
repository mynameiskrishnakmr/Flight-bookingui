import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SearchflightsComponent } from './components/searchflights/searchflights.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthGuard } from './modules/admin/guards/auth.guard';
import { ManageAirlinesComponent } from './modules/admin/components/manage-airlines/manage-airlines.component';
import { BookTicketComponent } from './users/components/book-ticket/book-ticket.component';
import { EmailTicketHistoryComponent } from './users/components/email-ticket-history/email-ticket-history.component';
import { PnrTicketDetailsComponent } from './users/components/pnr-ticket-details/pnr-ticket-details.component';
import { TicketDetailsComponent } from './users/components/ticket-details/ticket-details.component';
import { UserPageComponent } from './users/components/user-page/user-page.component';
import { UserModule } from './users/module/user/user.module';
export const routes: Route[] = [
  {path: "login", component: LoginComponent},
  {path: "sign-up", component: SignUpComponent},
  {path: "search-flights", component: SearchflightsComponent},
  {path: "ticket", component: TicketDetailsComponent,},
  {path: "user/ticket-details", component: TicketDetailsComponent}, 
  {path: "user/book-ticket", component: BookTicketComponent,  canActivate:[AuthGuard]},
  {path: "user/email-ticket-history", component:EmailTicketHistoryComponent },
  {path: "user/pnr-ticket-details", component: PnrTicketDetailsComponent},
  {path: "admin/manage-airlines", component: ManageAirlinesComponent},


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
