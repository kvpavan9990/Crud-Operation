import { Injectable } from '@angular/core';
import { food } from './food';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {

  constructor() { }
  private cart:food[];
  private billAmount:number=0;
  private isUserLoggedIn:boolean = false;
  private userType:string='';  // U || A
  getFood(){
    return this.cart;
  }

  setFood(cart){
    this.cart=cart;
  }

  getBillAmonut(){
    return this.billAmount;
  }

  setBillAmount(billAmount){
    this.billAmount=billAmount;
  }

  getIsUserLoggedIn(){
    return this.isUserLoggedIn;
  }

  setIsUserLoggedIn(isUserLoggedIn){
    this.isUserLoggedIn=isUserLoggedIn;
  }

  getUserType(){
    return this.userType;
  }

  setUserType(userType){
    this.userType=userType;
  }
}
