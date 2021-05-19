import { Component, OnInit } from '@angular/core';
import { EditdataService } from '../../share/editdata.service';
import { EmpdataService } from '../../share/empdata.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/share/auth.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  empList:any[];
  closeResult = '';
  LoginStatus:boolean;
  

  constructor(private route:ActivatedRoute, private router:Router, private authService:AuthService ,private empdata: EmpdataService, private editdata: EditdataService, private modalService: NgbModal) { 
     this.empdata.getdata().subscribe(data => {
       console.log(data)
      this.empList = data;
     });

     this.authService.loginStatus().subscribe(s =>{
      this.LoginStatus = s;
     });
     
  } 

  ngOnInit(): void { 
    this.empList = this.route.snapshot.data.users;
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



  open(content, data) {

    if(this.LoginStatus){
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
     
        if(result == "Yes"){
          this.empdata.deletedata(data);
        }
      });
    }else{
      this.router.navigateByUrl('/login');
     // this.authService.store(data,'edit', content);
    }

    
  }

  getDetail(detail){
    this.empdata.setDetail(detail);
  }


}
