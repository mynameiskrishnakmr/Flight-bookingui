import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-discounts',
  templateUrl: './manage-discounts.component.html',
  styleUrls: ['./manage-discounts.component.css']
})
export class ManageDiscountsComponent implements OnInit {


  couponcode: string ="";
  expiryDate:string ="";
  status:string ="";
  discountPrice:string="";


  constructor() { }

  ngOnInit(): void {
    
  }

  addDiscountCoupon(){

  }

  modifyCoupon(){

    
  }

}
