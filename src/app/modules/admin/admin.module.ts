import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageFlightsComponent } from './components/manage-flights/manage-flights.component';
import { ManageAirlinesComponent } from './components/manage-airlines/manage-airlines.component';
import { ManageDiscountsComponent } from './components/manage-discounts/manage-discounts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthenticationService } from './services/authentication.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';






@NgModule({
  declarations: [
    ManageFlightsComponent,
    ManageAirlinesComponent,
    ManageDiscountsComponent
  ],
  imports:  [
    CommonModule,  FormsModule,ReactiveFormsModule,
  ],

  providers: [AuthGuard, AuthenticationService,{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
  ]
})
export class AdminModule { }
