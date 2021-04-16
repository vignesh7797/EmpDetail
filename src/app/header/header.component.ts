import { Component, OnDestroy, OnInit } from '@angular/core';
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

  NoOf:number = 0;

  constructor(private empdata: EmpdataService) {
     this.empdata.getdata().subscribe(data => {
      this.NoOf = data.length;
     })
     
   }

  ngOnInit(): void {

    this.timer = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  ngOnDestroy(){
    clearInterval(this.timer);
  }

}
