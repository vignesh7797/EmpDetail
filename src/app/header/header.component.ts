import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../share/auth.service';
import { EmpdataService } from '../share/empdata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  todayDate = new Date();
  time = new Date();
  timer;
  islogged:boolean=false;

  public NoOf:number = 0;

  constructor(private route:ActivatedRoute, 
              private router:Router, 
              private empdata: EmpdataService,
              private auth:AuthService) {


    setTimeout(()=>{
      this.empdata.getdata().subscribe(data => {
       // console.log(data)
       this.NoOf = data.length;
      });
    },1000);


    this.auth.loginStatus().subscribe(s => {
      this.islogged = s;
    })
   }

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  OnLog(){
    if(!this.islogged){
      this.router.navigateByUrl('/login')
    } else{
      this.auth.getStatus(false);
    }
  }

  ngOnDestroy(){
    clearInterval(this.timer);
  }

}
