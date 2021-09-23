import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Couponcode } from '../models/couponcode.model';

@Injectable({
  providedIn: 'root'
})
export class ManageDiscountsService {
  
  
  
  url:string="http://localhost:9091/api/v1.0/admin/coupon";
  
  constructor(private http:HttpClient) { }   

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
    console.log(jsonString);
    return this.http.put(this.url,coupon,options)
  }

  deleteDiscountcoupon(couponCode: string) {
    
    return this.http.delete(this.url+"/"+couponCode);
  }
 

}
