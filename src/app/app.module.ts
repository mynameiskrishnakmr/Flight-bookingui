import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchflightsComponent } from './components/searchflights/searchflights.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserModule } from './users/module/user/user.module';
import { TicketDetailsComponent } from './users/components/ticket-details/ticket-details.component';
import { BookTicketComponent } from './users/components/book-ticket/book-ticket.component';
import { UserPageComponent } from './users/components/user-page/user-page.component';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PnrTicketDetailsComponent } from './users/components/pnr-ticket-details/pnr-ticket-details.component';
import { EmailTicketHistoryComponent } from './users/components/email-ticket-history/email-ticket-history.component';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { AuthGuard } from './modules/admin/guards/auth.guard';
import { AuthenticationService } from './service/authentication.service';
import { AdminModule } from './modules/admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchflightsComponent,
    LoginComponent,
    SignUpComponent,
    TicketDetailsComponent,
    BookTicketComponent,
    UserPageComponent,
    PnrTicketDetailsComponent,
    EmailTicketHistoryComponent,
    
  ],
  imports: [
    BrowserModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AppRoutingModule, UserModule,HttpClientModule, FormsModule,ReactiveFormsModule, AdminModule
  ],
  providers: [AuthGuard, AuthenticationService,{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
