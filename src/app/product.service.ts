import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { food } from './food';
import {  throwError } from 'rxjs';
import {  catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl="api/foods"
  products:any;

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };
  
  constructor(private http: HttpClient) { }

  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }
  
  findAll() {
    return this.http.get<food[]>(this.baseUrl)
  }

  saveProduct(product){
    return this.http.post(this.baseUrl,product);
  }

  updateProduct(product){
    return this.http.put(this.baseUrl,product);
  }
  
  findById(id:number){
    let test=this.http.get(this.baseUrl+`/${id}`)
    return test;
  }

  deleteProduct(food:food){
     const id= food.id;
    // const url = `${this.baseUrl}/${id}`;
    // this.http.delete(url);
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<food>(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
    
  }

  
  //ng g c apple -it -is 

}
