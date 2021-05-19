import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { EmplistComponent } from '../employee/emplist/emplist.component';
import { OTPService } from './otp.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged = new BehaviorSubject<boolean>(false);
  userData = new BehaviorSubject<any>([]);
  

  constructor(private router:Router,private otp:OTPService) {   }

  loginStatus(){
    return this.isLogged;
  }

  getStatus(status){
    this.isLogged.next(status);
  }


}
