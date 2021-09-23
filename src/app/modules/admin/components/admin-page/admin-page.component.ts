import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
   
  constructor(public authService : AuthenticationService) {}

  ngOnInit(): void {}

  login(){
    
  }


  getLogout(){
    this.authService.getLogout();
  }
}
