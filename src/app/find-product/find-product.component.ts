import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-find-product',
  templateUrl: './find-product.component.html',
  styleUrls: ['./find-product.component.css']
})
export class FindProductComponent implements OnInit {

  searchForm:FormGroup;
  product:any;
  handleSubmit(){
    
    this.ps.findById(this.searchForm.get('id').value)
    .subscribe(productResponse=>this.product=productResponse)
    
    
    //this.ps.findById(this.)
    
  }

  constructor(private fb:FormBuilder,private ps:ProductService) { }

  ngOnInit(): void {
    this.searchForm=this.fb.group({
      id:['']
    })
  }

}
