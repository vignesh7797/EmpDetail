import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormatSettings } from '@progress/kendo-angular-dateinputs';
import { PhonePipe } from 'src/app/pipe/phone.pipe';
import { EditdataService } from '../../share/editdata.service';
import { EmpdataService } from '../../share/empdata.service';

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
  phonepipe = new PhonePipe();
  Default;
  mask='000 000 0000';

  public min: Date = new Date(1950, 0, 1);
  public max: Date = new Date();

  public format: FormatSettings = {
    displayFormat: "dd/MM/yyyy",
    inputFormat: "dd/MM/yyyy",
  };
  
  @ViewChild('phone') phone:ElementRef;


  constructor(private formBuilder: FormBuilder, private empdata: EmpdataService, private editdata:EditdataService) { 

    this.EmployeeForm =  this.formBuilder.group({
      'name':[null, Validators.required],
      'empid':[null, [Validators.required, Validators.minLength(1), Validators.maxLength(5)]],
      'email':[null, [Validators.required, Validators.email]],
      'phone':['', [Validators.required, Validators.minLength(10)]],
      'joiningdate':[new Date(), [Validators.required,]]
    });

   

    this.editdata.getdata().subscribe(data => {
      if(data != ''){
        this.Editdata = data;
        console.log(this.Editdata);
        
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

    // let value=this.phone.nativeElement.value;
    //  value = value.toString();
    
     

    //  let sp = value.split("");
    //  console.log(sp)

    //  if(sp[0] == '+'){
    //   for(let i=0; i<sp.length;i++){
    //     if(sp[i] == " "){
    //       sp.splice(i,1);
    //     }
    //   }
    //   sp.splice(0,3);
    //  }
    
    // sp = sp.join('');
    
    // this.EmployeeForm.value.phone = parseInt(sp);

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
    let value=this.phone.nativeElement.value;
     value = value.toString();
    
     
    if(this.EmployeeForm.valid){

    console.log(this.EmployeeForm.value, this.Editdata);
    this.empdata.updateData(this.EmployeeForm.value, this.Editdata);
    this.EmployeeForm.reset();
    this.isSubmit=true;
    this.isUpdate=false;
    }
  }


  

}
