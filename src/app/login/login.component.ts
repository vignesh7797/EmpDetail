import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OTPService } from '../share/otp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  otp:any;
  timeout:number;
  OneTimePass:FormGroup;
  submitted=false;

  constructor(private otpservice:OTPService, private formBuilder: FormBuilder, private router:Router) { 
    this.otpservice.getOtp().subscribe(value => {
      this.otp = value;
    });

    this.otpservice.gettimeout().subscribe(value => {
      this.timeout = value;
    });

    this.OneTimePass = this.formBuilder.group({
      'pass':['', Validators.required]
    })
  }

  get f() { return this.OneTimePass.controls; }

  ngOnInit(): void {}

  OnSubmit(){
    this.submitted = true;
    this.otpservice.getpass(this.OneTimePass.value.pass);
    this.router.navigateByUrl("/e-portal");
    if(this.otpservice.OnCheck() == false ){
      alert("Please Enter valid OTP..!");
    }
  }
}
