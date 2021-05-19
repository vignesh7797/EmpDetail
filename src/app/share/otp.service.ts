import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OTPService implements OnInit, OnDestroy{

  Otp= new BehaviorSubject<number>(Math.floor(1000 + Math.random() * 9999));
  otpgen;
  timeout = new BehaviorSubject<number>(15);
  duration =15;
  timer;
  pass = new BehaviorSubject<number>(null);

  constructor() { 
    this.timer = setInterval(() => {
      if(this.duration != 0){
        this.duration = this.duration -1;
        this.timeout.next(this.duration);
      }
      else{
        this.Otp.next(Math.floor(1000 + Math.random() * 9000));
        this.duration = 15;
        this.timeout.next(this.duration);
      }
    }, 1000);



      
      
  }
  

  ngOnInit(){
   
  }

  getOtp(){
    return this.Otp.asObservable();
  }

  gettimeout(){
    return this.timeout.asObservable();
  }

  getpass(value){
    this.pass.next(value);
  }

  OnCheck(){
    let isequal;
   // console.log(this.Otp.value, this.pass.value);
    
      if(this.Otp.value == this.pass.value){
        isequal= true;
      }else{
        isequal= false;
      }

    return isequal;
  }

  ngOnDestroy() {
    clearInterval(this.otpgen);
    clearInterval(this.timer);
  }

}
