import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../share/auth.service';
import { OTPService } from '../share/otp.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  logIn:FormGroup;
  submitted=false;
  otp:number;
  isLoading = false;

  constructor(private router:Router, 
              private formBuilder: FormBuilder, 
              private otpservice: OTPService,
              private authService: AuthService) { 
    
    
      this.logIn = this.formBuilder.group({
      'user':['Admin', Validators.required],
      'pass':[null, [Validators.required]]
    });

    this.otpservice.getOtp().subscribe(value => {
      this.otp = value;
    });
  }

  get f() { return this.logIn.controls; }

  ngOnInit(): void {
  }

  Submit(){
    this.isLoading = true;
    console.log(this.logIn.valid);
    if(this.logIn.valid){
      this.otpservice.getpass(this.logIn.value.pass);
      this.submitted = false;
      this.router.navigateByUrl('/e-portal');
      if(this.otpservice.OnCheck()){
        this.authService.getStatus(true);
      }
    
    }else{
      alert('Please Enter Valid Password.!');
      this.isLoading = false;
    }
    
  }

}
