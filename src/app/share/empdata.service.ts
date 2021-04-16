import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpdataService {

  empData = new BehaviorSubject<any>([]);

  arr:any[]=[{
    email: "emp1@htc.com",
    empid: 1,
    joiningdate: "2021-04-11",
    name: "Vicky",
    phone: 9876543210
  }];

  empDetail = new BehaviorSubject<any>(null);

  constructor() { }

  setData(value){
    this.arr.push(value)
    this.empData.next(this.arr);
    console.log(value);
  }

  updateData(newValue, oldValue){
    const index = this.arr.indexOf(oldValue);
    this.arr[index] = newValue;
    this.empData.next(this.arr);
  }

  deletedata(value){
    const index = this.arr.indexOf(value);
    this.arr.splice(index, 1);
    this.empData.next(this.arr);
  }

  setDetail(detail){
    this.empDetail.next(this.arr.filter(d => d.empid == detail.empid)[0]);
    //console.log(this.empDetail.value);
  }

  getdata(){
    this.empData.next(this.arr);
    return this.empData.asObservable();
  }

  getDetail(){
    return this.empDetail.asObservable();
  }

}
