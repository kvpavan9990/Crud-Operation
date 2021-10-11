import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';
import { food } from '../food';
import { ProductService } from '../product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent  implements OnInit {

    products:any
    cartOrder:food[] = [];
    constructor(
        private ps:ProductService,
        public dataShare:DatashareService,
        private toastr:ToastrService) { }
  
    renderProducts(){
      this.ps.findAll().subscribe(productsResult =>
        {
         this.products = productsResult
        });
    }
  
    ngOnInit(): void {
    
      this.renderProducts();
    }

    onChange(event,id){
        this.products[id-1].numberOfPlates=event.target.value;
    }

    onClick(){
        for(let i of this.products){
            if(i.numberOfPlates>0){
                this.cartOrder.push(i);
            }
        }
        this.dataShare.setFood(this.cartOrder);
        this.toastr.success('Item added to cart successfully');
    }
    deleteItem(product:food):void{
      this.products = this.products.filter(p => p !== product);
      this.ps.deleteProduct(product).subscribe();
          
    }
  
}
