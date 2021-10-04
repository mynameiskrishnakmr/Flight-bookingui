import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { Couponcode } from '../../models/couponcode.model';
import { ManageDiscountsService } from '../../services/manage-discounts.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

  coupon :Couponcode= new Couponcode("",new Date,"","");
  onAdd = new EventEmitter();

  constructor(
    public manageService:ManageDiscountsService,
    
    private router:Router) { }

  ngOnInit(): void {}


  /*modifyDiscountCoupon(){
    if(this.manageService.discountForm.valid){
        this.coupon=this.manageService.discountForm.value;
        console.log(this.coupon);
        this.manageService.modifyDiscountcoupon(this.coupon).subscribe(
          (response:any)=> console.log("response"+response)
          );
        this.manageService.discountForm.reset();
        this.manageService.initializeFormGroup();
        this.onClose();
        
      }
  }*/

  modifyDiscountCoupon(){
    if(this.manageService.discountForm.valid){
      this.coupon=this.manageService.discountForm.value;
      console.log(this.coupon);
      this.manageService.modifyDiscountcoupon(this.coupon).subscribe(
        (response:any)=> {
          console.log("response"+response);
          this.router.navigate(["/admin/manage-discounts"]);
        }

        );
    }

  }

  goBack(){

    this.router.navigate(["/admin/manage-discounts"])
  }

  /*onClose() {
    this.manageService.discountForm.reset();
    this.dialogRef.close();
  }*/
}
