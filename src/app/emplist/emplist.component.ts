import { Component, OnInit } from '@angular/core';
import { EditdataService } from '../share/editdata.service';
import { EmpdataService } from '../share/empdata.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  empList:any[];
  closeResult = '';
  

  constructor(private empdata: EmpdataService, private editdata: EditdataService, private modalService: NgbModal) { 
    this.empdata.getdata().subscribe(data => {
      this.empList = data;
    })
  }

  ngOnInit(): void {
  }

  OnEdit(value){
    console.log(value);
    this.editdata.setData(value);
  }



  open(content, data) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
     
      if(result == "Yes"){
        this.empdata.deletedata(data);
      }
    });
  }


}
