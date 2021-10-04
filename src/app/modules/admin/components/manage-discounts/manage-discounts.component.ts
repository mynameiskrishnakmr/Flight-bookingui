import { Component, OnInit } from '@angular/core';
//import { MatDialog} from '@angular/material/dialog';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Route, Router } from '@angular/router';
import { Couponcode } from '../../models/couponcode.model';
import { ManageDiscountsService } from '../../services/manage-discounts.service';
import { DiscountComponent } from '../discount/discount.component';


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

  constructor(private manageDiscountsService: ManageDiscountsService, private matDialogue: MatDialog,private router:Router) { 


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

  /*modifyCoupon(coupon:Couponcode){
        this.manageDiscountsService.populateForm(coupon);
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "60%";
        this.matDialogue.open(DiscountComponent,dialogConfig);
        
        //this.matDialogue.afterAllClosed.subscribe((response:any)=>console.log("krishna"+response) );
        this.matDialogue.afterAllClosed.subscribe((response:any)=>console.log("krishna"+response) );

        // this.matDialogue.open(ManageDiscountsComponent);
  }*/

  modifyCoupon(coupon:Couponcode){
    this.manageDiscountsService.populateForm(coupon);
    this.router.navigate(["/admin/discount-modify"]);
    
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
