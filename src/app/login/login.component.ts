import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DatashareService } from '../datashare.service';
import { users } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private toastr:ToastrService,
    private dataShare:DatashareService
    ) { }
  uname:string='';
  pword:string='';
  flag:boolean=true;
  userDetails = users;
  loginForm:FormGroup;
  ngOnInit(): void {
    this.loginForm=this.fb.group(
      {
        uname:[''],
        pword:['']
      }
    )
    this.dataShare.setIsUserLoggedIn(false);
    this.dataShare.setUserType('');
  }

  onLogin(){
    for(let i of this.userDetails){
      if(i.name == this.loginForm.get('uname').value && i.password == this.loginForm.get('pword').value){
        this.toastr.success("Login successful");
        this.router.navigate(['list']);
        this.flag=false;
        this.dataShare.setIsUserLoggedIn(true);
        this.dataShare.setUserType(i.userType)
      }
    }
    if(this.flag){
      this.toastr.error("Login failed please enter valid credentials");
    }
  }

}
