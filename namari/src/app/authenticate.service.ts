import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService implements CanActivate {

  constructor(private route:Router) { }
  canActivate(next:ActivatedRouteSnapshot , state:RouterStateSnapshot){
    this.route.navigate(['login']);
      return true;
}
  

}
