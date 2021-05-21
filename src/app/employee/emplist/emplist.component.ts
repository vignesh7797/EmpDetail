import { Component, OnInit } from '@angular/core';
import { EditdataService } from '../../share/editdata.service';
import { EmpdataService } from '../../share/empdata.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/share/auth.service';
import { GridDataResult, PageChangeEvent } from "@progress/kendo-angular-grid";

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  empList:any[];
  closeResult = '';
  LoginStatus:boolean;

  public gridView: GridDataResult;
  public pageSize = 5;
  public skip = 0;
  private items: any[];
  openDialog = false;
  

  constructor(private route:ActivatedRoute, private router:Router, private authService:AuthService ,private empdata: EmpdataService, private editdata: EditdataService, private modalService: NgbModal) { 
     this.empdata.getdata().subscribe(data => {
       console.log(data)
      this.empList = data;
     });

     this.authService.loginStatus().subscribe(s =>{
      this.LoginStatus = s;
     });
     
     this.items = this.empList;
     this.loadItems();
  } 

  ngOnInit(): void { 
   // this.empList = this.route.snapshot.data.users;
    console.log(this.empList.length);
  }

  OnEdit(value){
    console.log(value);
    if(this.LoginStatus){
      this.editdata.setData(value);
    }else{
      this.router.navigateByUrl('/login');
     // this.authService.store(value,'edit');
    }
    
  }



  open(status, data?) {

    console.log(data)
    if(this.LoginStatus){

      if(status == 'open'){
        this.openDialog = true
      }else if(status == 'yes'){
        this.empdata.deletedata(data);
        this.openDialog = false;
      }else if(status == 'no' || status == 'cancel'){
        this.openDialog = false;
      }
      
    }else{
      this.router.navigateByUrl('/login');
    }


    
  }

  getDetail(detail){
    this.empdata.setDetail(detail);
  }


  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadItems();
  }

  private loadItems(): void {
    this.gridView = {
      data: this.items.slice(this.skip, this.skip + this.pageSize),
      total: this.items.length,
    };
  }



}
