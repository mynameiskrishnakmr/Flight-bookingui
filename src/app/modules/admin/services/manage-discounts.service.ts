import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Couponcode } from '../models/couponcode.model';

@Injectable({
  providedIn: 'root'
})
export class ManageDiscountsService {
  
  
  
  url:string="http://3.143.221.2:9091/api/v1.0/admin/coupon";
  
  discountForm : FormGroup;

  constructor(private http:HttpClient) {
    this.discountForm= new FormGroup({
     
      "couponCode": new FormControl("", Validators.required),
      "expiryDate" : new FormControl( new Date,Validators.required),
      "status" : new FormControl(0),
      "discountPrice" : new FormControl( "",Validators.required),
      

    });
   }   

  getAllDiscountCoupons() {
    return this.http.get(this.url);
  }

  addDiscountCoupon( coupon: Couponcode) {
    let jsonString=JSON.stringify(coupon);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json' });
    let options = { headers: headers };
    console.log(jsonString);
    return this.http.post(this.url,coupon,options)
  }

  modifyDiscountcoupon(coupon: Couponcode) {
    let jsonString=JSON.stringify(coupon);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json' });
    let options = { headers: headers };
    console.log("final json str"+jsonString);
    return this.http.put(this.url+"/"+coupon.couponCode,jsonString,options)
  }

  deleteDiscountcoupon(couponCode: string) {
    
    return this.http.delete(this.url+"/"+couponCode);
  }


  populateForm(coupon: any) {
    
    this.discountForm.setValue(coupon);
  }
 
  initializeFormGroup() {
    this.discountForm.setValue({
     
      couponCode: '',
      expiryDate: new Date,
      discountPrice:'',
      status: 0,
      
    });
  }
}


