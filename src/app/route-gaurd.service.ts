import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { DatashareService } from './datashare.service';


@Injectable({
  providedIn: 'root'
})
export class RouteGaurdService implements CanActivate{

  constructor(private service:DatashareService, private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot) {
    if(this.service.getIsUserLoggedIn())
    return true;
    else{
      this.router.navigate(['login']);
    return false;
    }
  }
}