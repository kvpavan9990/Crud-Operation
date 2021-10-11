import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DatashareService } from './datashare.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'router-demo';
  constructor(private router:Router,public dataShare:DatashareService,private toastr:ToastrService){

  }
  goToCart(){
    this.router.navigate(["cart"]);
  }
  logout(){
    this.dataShare.setIsUserLoggedIn(false);
    this.dataShare.setUserType('');
    this.toastr.success('Loggedout Successfully');
    this.router.navigate(['']); 
  }
}
