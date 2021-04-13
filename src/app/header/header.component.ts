import { Component, OnInit } from '@angular/core';
import { EmpdataService } from '../share/empdata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  todayDate = new Date();

  NoOf:number = 0;

  constructor(private empdata: EmpdataService) {
     this.empdata.getdata().subscribe(data => {
      this.NoOf = data.length;
     })
   }

  ngOnInit(): void {
  }

}
