import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditdataService } from 'src/app/share/editdata.service';
import { EmpdataService } from 'src/app/share/empdata.service';
import { OTPService } from 'src/app/share/otp.service';

@Component({
  selector: 'app-empdetail',
  templateUrl: './empdetail.component.html',
  styleUrls: ['./empdetail.component.css']
})
export class EmpdetailComponent implements OnInit {

  empDetail;

  constructor(private empdata:EmpdataService, private otpservice: OTPService, private editdata: EditdataService) { 

    this.empdata.getDetail().subscribe(data =>{
      this.empDetail = data;
    });

   // console.log(this.empDetail);
  }

  ngOnInit(): void {
  }

  OnEdit(data){
    this.editdata.setData(data);
  }



}
