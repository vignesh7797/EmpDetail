import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { OTPService } from '../share/otp.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  isAuthenticate = false;

  constructor(private otpService:OTPService){ 
    this.isAuthenticate = this.otpService.OnCheck();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAuthenticate;
  }
  
}
