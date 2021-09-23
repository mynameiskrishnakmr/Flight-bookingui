import { Component, OnInit } from '@angular/core';
import { Couponcode } from '../../models/couponcode.model';
import { ManageDiscountsService } from '../../services/manage-discounts.service';

@Component({
  selector: 'app-manage-discounts',
  templateUrl: './manage-discounts.component.html',
  styleUrls: ['./manage-discounts.component.css']
})
export class ManageDiscountsComponent implements OnInit {


  // couponcode: string ="";
  // expiryDate:string ="";
  // status:string ="";
  // discountPrice:string="";
   discountCoupons:Couponcode[]=[];
   coupon :Couponcode= new Couponcode("",new Date,"","");
   newCoupon :Couponcode= new Couponcode("",new Date,"","");
  message: any;

  constructor(private manageDiscountsService: ManageDiscountsService) { 


  }

  ngOnInit(): void {

    this.getAllCoupon();
    
  }

  addDiscountCoupon(){

    this.manageDiscountsService.addDiscountCoupon(this.newCoupon).subscribe((response:any)=>{
      console.log(response);
      this.coupon = response;
      this.getAllCoupon();
    });

  }

  modifyCoupon(coupon:Couponcode){

    this.manageDiscountsService.modifyDiscountcoupon(coupon).subscribe((response:any)=>{
      console.log(response);
      this.coupon = response;
      this.getAllCoupon();
    });
    
  }


  deleteCoupon(couponCode:string){

    this.manageDiscountsService.deleteDiscountcoupon(couponCode).subscribe((response:any)=>{
      console.log(response);
      this.message=response;
      this.getAllCoupon();
    });
  }

  getAllCoupon(){
      this.manageDiscountsService.getAllDiscountCoupons().subscribe((response:any)=>{

          console.log(response);
          this.discountCoupons=response;
      });
      }



}
