import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EditdataService } from '../share/editdata.service';
import { EmpdataService } from '../share/empdata.service';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent implements OnInit {

  EmployeeForm:FormGroup;
  Editdata:any;
  maxdate = new Date().toISOString().split("T")[0];
  submitted=false;
  isSubmit=true;
  isUpdate=false;


  constructor(private formBuilder: FormBuilder, private empdata: EmpdataService, private editdata:EditdataService) { 

    this.EmployeeForm =  this.formBuilder.group({
      'name':['', Validators.required],
      'empid':['', [Validators.required, Validators.minLength(5)]],
      'email':['', [Validators.required, Validators.email]],
      'phone':['', [Validators.required, Validators.minLength(10) ,Validators.maxLength(10)]],
      'joiningdate':['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]]
    });

    this.editdata.getdata().subscribe(data => {
      if(data != ''){
        this.Editdata = data;
        this.EmployeeForm.setValue(this.Editdata);
        this.isSubmit=false;
        this.isUpdate=true;
      }
    })
  }

  get f() { return this.EmployeeForm.controls; }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted = true;

    if(this.EmployeeForm.valid){
      console.log(this.EmployeeForm.value);
      this.empdata.setData(this.EmployeeForm.value);
      this.EmployeeForm.reset();
      this.submitted = false;
    }else{
      //alert("Invalid");
    }
  }

  OnUpdata(){
    console.log(this.EmployeeForm.value, this.Editdata);
    this.empdata.updateData(this.EmployeeForm.value, this.Editdata);
    this.EmployeeForm.reset();
    this.isSubmit=true;
    this.isUpdate=false;
  }

}
