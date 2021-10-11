import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  products:any
  btn:string = 'Save'
  // steps:
  // 1 - Define FormGroup element name
  productForm: FormGroup;
  public food:any;
  newId:number;
  saveButton:boolean=false;
  // step2: define form builder object
  constructor(
    private fb:FormBuilder,
    private ps:ProductService,
    private router:Router,
    private toastr:ToastrService) {}

  // step3: define / add form elements to the formGroup obj
  ngOnInit(){
    this.ps.findAll().subscribe(res=>{
      this.food=res;
      this.newId=this.food.length+1;
      if(this.food.length == 100){
        this.saveButton=true;
        this.toastr.info('You have crossed the limit of adding the items.')
      }
    });
    
    
    this.productForm=this.fb.group(
      {
        id:[],
        name:[''],
        price:[0.0],
        description:['']
      }
    );

   

  }


  onChange(event){
    let change = event.target.value;
    this.btn = change < this.newId ?  'Update' : 'Save';
    if(change > this.food.length+1){
    setTimeout(()=>{
      this.toastr.info('Available latest id is' + (this.food.length+1));
    },1000);
   }
  }

  // step 4: submit form function

  handleSubmit(){
    this.productForm.controls['id'].setValue(parseInt(this.productForm.controls['id'].value));
    if(this.productForm.controls['id'].value < this.newId){
      this.ps.updateProduct(this.productForm.value).subscribe(res=>{
        
      });
    }else{
     this.ps.saveProduct(this.productForm.value)
    .subscribe(product =>{
   })}
    this.router.navigate(['list']);
  }


}
