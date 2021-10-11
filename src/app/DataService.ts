import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
    providedIn: 'root'
  })
  export class DataService implements InMemoryDbService{
  
    constructor() { }
    createDb(){
  
     let  foods =  [
      {id:1, name:"Idly", price:20, description:"Four piece Idly with Chutney and Sambar", numberOfPlates:0},
      {id:2, name:"Pongal", price:30, description:"One cup Pongal with sambar", numberOfPlates:0},
      {id:3, name:"Puri", price:50, description:"Two Piece puri with kurma", numberOfPlates:0},
      {id:4, name:"Vada", price:30, description:"Three piece vada with Chutney and Sambar", numberOfPlates:0},
      {id:5, name:"Parotta", price:40, description:"Two piece Parotta with Kurma", numberOfPlates:0},
      {id:6, name:"Dosa", price:30, description:"Plain Dosa with Red and White chutney", numberOfPlates:0},
      {id:7, name:"Masala Dosa", price:60, description:"Masala dosa with red chutney", numberOfPlates:0},
      {id:8, name:"Onion Dosa", price:60, description:"Onion dosa with chutney", numberOfPlates:0},
      {id:9, name:"Ghee Karam Roast", price:70, description:"Nellore special Ghee Karam Roast", numberOfPlates:0},
      {id:10, name:"Upma Pesarattu", price:50, description:"Upma Pesarattu with allam chutney", numberOfPlates:0}
     ];

     
  
     return {foods};
  
    }
  }