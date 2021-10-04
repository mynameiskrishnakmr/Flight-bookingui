import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageFlightsComponent } from './components/manage-flights/manage-flights.component';
import { ManageAirlinesComponent } from './components/manage-airlines/manage-airlines.component';
import { ManageDiscountsComponent } from './components/manage-discounts/manage-discounts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthenticationService } from './services/authentication.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { routes } from './admin.routing';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DiscountComponent } from './components/discount/discount.component';
import { FlightComponent } from './components/flight/flight.component';






@NgModule({
  declarations: [
    ManageFlightsComponent,
    ManageAirlinesComponent,
    ManageDiscountsComponent,
    AdminPageComponent,
    LoginComponent,
    SignUpComponent,
    DiscountComponent,
    FlightComponent
    
  ],
  imports:  [
    CommonModule,  FormsModule,ReactiveFormsModule,AppRoutingModule, HttpClientModule,RouterModule.forChild(routes), MatDialogModule,BrowserAnimationsModule
  ],

  providers: [AuthGuard, AuthenticationService,{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
  ]
})
export class AdminModule { }
