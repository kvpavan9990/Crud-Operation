import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatashareService } from '../datashare.service';


@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {

  constructor(public dataShare:DatashareService,private router:Router) { }

  public products:any[];
  public billAmount:number = 0;
  ngOnInit(): void {
    this.products= this.dataShare.getFood();
    if(this.products !=null){
    for(let i of this.products){
      this.billAmount =  this.billAmount + (i.price * i.numberOfPlates);
    }
    this.dataShare.setBillAmount(this.billAmount);
  }
 }

  onPurchase(){
    this.router.navigate(['bill'])
  }

}
